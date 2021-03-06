import React from 'react';

class NavBar extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="navBar-admin">
                <ul>
                    <a href="#" onClick={this.props.menuClick}><li id="open-orders" className="menu-admin__item">Open Orders</li></a>
                    <a href="#" onClick={this.props.menuClick}><li id="past-orders" className="menu-admin__item">Past Orders</li></a>
                    <a href="#" onClick={this.props.menuClick}><li id="available-ingredients" className="menu-admin__item">Available Ingredients</li></a>
                    <a href="#" onClick={this.props.menuClick}><li id="registered-customers" className="menu-admin__item">Registered Customers</li></a>
                </ul>

                <a href="#" onClick={this.props.handleLogout} className="menu-admin__logout"><strong>Logout babyyyy!</strong></a>
            </div>
        )
    }
}

export default NavBar;
