import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';

class Login extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            email: '',
            password: '',
            token: '',
            status: '',
            error: ''
        }

        this.handleLogin = this.handleLogin.bind( this );
        this.handleLogout = this.handleLogout.bind( this );
        this.handleChange = this.handleChange.bind( this );
    }

    handleLogin( event ) {
        event.preventDefault(); // Prevent form redirect

        if ( this.state.status !== '' ) {
            this.setState( { status: 'logged_out' } );
        } else {
            fetch( 'http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    'email': this.state.email,
                    'password': this.state.password
                } )
            } )
                .then( response => response.json() )
                .then( data => {
                    if ( data['error'] === 'Unauthorized' ) {   // This is where we check if error comes back
                        this.setState( { error: data['error'] } );  // If an error comes back, state->error will be filled
                    } else {
                        this.setState( {    //  This is what will happen if log in is successful
                            token: data,
                            status: 'logged_in'
                        } );
                        this.setToken( data.data.token );
                    }
                } )
        }
    }

    handleLogout() {
        window.localStorage.removeItem( '_token' );
        this.setState( {
            email: '',
            password: '',
            token: '',
            status: '',
            error: ''
        } );
    }

    setToken( token ) {
        window.localStorage.setItem( '_token', token );
    }

    handleChange( event ) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState( { [nam]: val } );
    }

    render() {
        if ( this.state.status === 'logged_in' ) {
            return <Admin token={this.state.token} handleLogout={this.handleLogout} />
        } else {
            return (
                <>
                    <form className="form-group" onSubmit={this.handleLogin}>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} />

                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </>
            )
        }
    }
}

export default Login;

if ( document.getElementById( 'login' ) ) {
    ReactDOM.render( <Login />, document.getElementById( 'login' ) );
}
