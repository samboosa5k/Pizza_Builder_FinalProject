import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import NavBar from './customer_components/NavBar.jsx';
import FrontPage from './customer_components/FrontPage.jsx';
import Checkout from './customer_components/Checkout.jsx';

const Home = ( { match } ) => {
    const [ingredientProps, setIngredientProps] = useState( {
        "pizza_1": {
            "pizza_id": 2,
            "pizza_ingredients": [3, 4, 4, 5]
        }
    } );

    return (
        <>
            <Router>

                <NavBar />

                <Route exact path='/magic/checkout' render={( routeProps ) => (
                    <Checkout {...routeProps} ingredientProps={ingredientProps} />
                )} />

                <Route exact path='/magic' render={( routeProps ) => (
                    <FrontPage {...routeProps} />
                )} />

            </Router>
        </>
    )
}

export default Home;
