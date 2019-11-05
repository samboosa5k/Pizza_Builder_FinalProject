import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './admin_components/NavBar';

class Admin extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            token: '',
            status: '',
            apiResponse: '',
            error: ''
        }

        this.loadAdmin = this.loadAdmin.bind( this );
    }

    loadAdmin() {
        fetch( 'http://127.0.0.1:8000/management', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.props.token.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        } )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data } );
            } )
    }

    componentDidMount() {
        this.loadAdmin();
    }

    render() {
        return (
            <>
                <NavBar handleLogout={this.props.handleLogout} />
            </>
        )
    }
}

export default Admin;

if ( document.getElementById( 'admin' ) ) {
    ReactDOM.render( <Admin />, document.getElementById( 'admin' ) );
}
