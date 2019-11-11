import React from 'react';
import Admin from './Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class AdminLogin extends React.Component {
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
            this.setState( { status: 'logged_out' } );                  //  If there is no status, stay logged out
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
                    if ( data['message'] !== 'Authorized' ) {   // This is where we check if error comes back
                        this.setState( { error: data['error'] } );  // If an error comes back, state->error will be filled
                    } else {
                        this.setState( {    //  This is what will happen if log in is successful
                            token: data,
                            status: 'logged_in'
                        } );
                        this.setToken( data.token );
                        //console.log( data.token );  //  This logs the current token after a successful login :D
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
        //  Below if-condition checks what to do if status is logged in, OR if
        if ( this.state.status === 'logged_in' || window.localStorage.getItem( '_token' ) !== null ) {
            return <Admin token={this.state.token} handleLogout={this.handleLogout} />
        } else {
            return (
                <>
                    <div className="admin-login__wrapper">
                        <h1 className="admin-login__header">Admin Login</h1>
                        <form className="form-group admin-login__form" onSubmit={this.handleLogin}>
                            <label className="admin-login__label" htmlFor="email">Email address:</label>
                            <input type="email" className="admin-login__input" id="email" name="email" onChange={this.handleChange} />

                            <label className="admin-login__label" htmlFor="pwd">Password:</label>
                            <input type="password" className="admin-login__input" id="password" name="password" onChange={this.handleChange} />

                            <button type="submit" className="btn btn-default admin-login__button">Submit</button>
                        </form>
                    </div>
                </>
            )
        }
    }
}

export default AdminLogin;
