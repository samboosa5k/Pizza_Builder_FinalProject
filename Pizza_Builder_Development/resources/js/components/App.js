import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import NavBar from './customer_components/NavBar.jsx';
import Checkout from './customer_components/Checkout.jsx';
import AdminLogin from './AdminLogin.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            ingredientProps: {
                "pizza_1": {
                    "pizza_id": 2,
                    "pizza_ingredients": [3, 4, 4, 5]
                }
            }
        }
    }

    render() {
        console.log( 'Step 1', 'App.js reached' );  // Weird login bug troubleshooting

        return (
            <>
                <Router>
                    <NavBar />

                    <Switch>
                        <Route exact path='/' render={( routeProps ) => (
                            <Home {...routeProps} />
                        )} />

                        <Route exact path='/checkout' render={( routeProps ) => (
                            <Checkout {...routeProps} ingredientProps={this.state.ingredientProps} />
                        )} />

                        {/* ADMIN ROUTES */}
                        <Route path='/login' render={( routeProps ) => (
                            <AdminLogin {...routeProps} />
                        )} />

                    </Switch>

                </Router>
            </>
        )
    }
}

export default App;

if ( document.getElementById( 'app' ) ) {
    ReactDOM.render( <App />, document.getElementById( 'app' ) );
}
