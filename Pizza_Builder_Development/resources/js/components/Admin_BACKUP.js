import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './admin_components/NavBar';
import MainContent from './admin_components/MainContent';

class Admin extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            token: '',
            status: '',
            apiResponse: '',
            content: '',
            error: '',
        }

        this.loadAdmin = this.loadAdmin.bind( this );
        this.menuClick = this.menuClick.bind( this );
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

    menuClick( event ) {
        event.preventDefault();
        this.setState( { content: event.target.id } );
    }

    render() {
        return (
            <>
                <NavBar handleLogout={this.props.handleLogout} menuClick={this.menuClick} />
                <MainContent content={this.state.content} token={this.props.token.token} />
            </>
        )
    }
}

export default Admin;

if ( document.getElementById( 'admin' ) ) {
    ReactDOM.render( <Admin />, document.getElementById( 'admin' ) );
}
