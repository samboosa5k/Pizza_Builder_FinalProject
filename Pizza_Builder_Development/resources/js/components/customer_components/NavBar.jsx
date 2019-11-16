import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( props ) => {
    return (
        <>

            <div className="navBar-admin">
                <ul>
                    <li id="builder" className="menu-admin__item">
                        <Link to="/login">Login</Link>
                    </li>

                    <li id="builder" className="menu-admin__item">
                        <Link to="/builder">Builder</Link>
                    </li>

                    <li id="checkout" className="menu-admin__item">
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default NavBar;
