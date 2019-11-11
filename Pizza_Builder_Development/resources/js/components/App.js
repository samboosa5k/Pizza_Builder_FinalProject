import React from 'react';
import ReactDOM from 'react-dom';
import AdminLogin from './AdminLogin.jsx';
import Checkout from './customer_components/Checkout.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
        return (
            <>
                <Router>
                    <div className="navBar-admin">
                        <ul>

                            <li id="builder" className="menu-admin__item">
                                <Link to="/">Login</Link>
                            </li>

                            <li id="builder" className="menu-admin__item">
                                <Link to="/builder">Builder</Link>
                            </li>

                            <li id="checkout" className="menu-admin__item">
                                <Link to="/checkout">Checkout</Link>
                            </li>

                            {/* <li id="checkout-finalize" className="menu-admin__item">
                                <Link to="/checkout/finalize">Finalize</Link>
                            </li> */}
                        </ul>

                    </div>


                    <Route exact path='/' render={( routeProps ) => (
                        <AdminLogin {...routeProps} />
                    )} />

                    <Route exact path='/checkout' render={( routeProps ) => (
                        <Checkout {...routeProps} ingredientProps={this.state.ingredientProps} />
                    )} />



                </Router>
            </>
        )
    }
}

export default App;

if ( document.getElementById( 'app' ) ) {
    ReactDOM.render( <App />, document.getElementById( 'app' ) );
}
