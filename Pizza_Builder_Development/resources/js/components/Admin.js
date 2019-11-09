import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './admin_components/NavBar';
import MainContent from './admin_components/MainContent';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

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
        console.log( event.target.id );
        this.setState( { content: event.target.id } );
    }

    render() {
        return (
            <>
                <Router>

                    <Redirect from='/login/' to="/admin" />

                    <div className="navBar-admin">
                        <ul>

                            <li id="open-orders" className="menu-admin__item">
                                <Link to="/admin/open-orders">Open Orders</Link>
                            </li>

                            <li id="past-orders" className="menu-admin__item">
                                <Link to="/admin/past-orders">Past Orders</Link>
                            </li>

                            <li id="available-ingredients" className="menu-admin__item">
                                <Link to="/admin/available-ingredients">Available Ingredients</Link>
                            </li>

                            <li id="registered-custoemrs" className="menu-admin__item">
                                <Link to="/admin/registered-customers">Regsitered Customers</Link>
                            </li>
                        </ul>

                        <Link to="/login" className="menu-admin__logout" onClick={this.props.handleLogout}>Logout babyyyy!</Link>

                    </div>

                    <Switch>
                        <Route path='/admin/login' render={( routeProps ) => (
                            <MainContent {...routeProps} content={this.state.content} token={this.props.token.token} />
                        )} />

                        <Route path='/admin/open-orders' render={( routeProps ) => (
                            <MainContent {...routeProps} content='open-orders' token={this.props.token.token} />
                        )} />

                        <Route path='/admin/past-orders' render={( routeProps ) => (
                            <MainContent {...routeProps} content='past-orders' token={this.props.token.token} />
                        )} />

                        <Route path='/admin/available-ingredients' render={( routeProps ) => (
                            <MainContent {...routeProps} content='available-ingredients' token={this.props.token.token} />
                        )} />

                        <Route path='/admin/registered-customers' render={( routeProps ) => (
                            <MainContent {...routeProps} content='registered-customers' token={this.props.token.token} />
                        )} />

                        <Route path='/admin' render={( routeProps ) => (
                            <MainContent {...routeProps} content='open-orders' token={this.props.token.token} />
                        )} />

                    </Switch>
                </Router>
            </>
        )
    }
}

export default Admin;

if ( document.getElementById( 'admin' ) ) {
    ReactDOM.render( <Admin />, document.getElementById( 'admin' ) );
}
