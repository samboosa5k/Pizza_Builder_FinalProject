import React from 'react';

class NavBar extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="navBar-admin">
                <ul>
                    <li>Open Orders</li>
                    <li>Past Orders</li>
                    <li>Available Ingredients</li>
                    <li>Registered Customers</li>
                </ul>

                <a href="#" onClick={this.props.handleLogout}><strong>Logout babyyyy!</strong></a>
            </div>
        )
    }
}

export default NavBar;
