import React from 'react';
import Ingredients from './Ingredients.jsx';
import Orders from './Orders.jsx';

class MainContent extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="mainContent-admin">
                {
                    ( () => {
                        switch ( this.props.content ) {
                            case 'available-ingredients':
                                return <Ingredients />;
                                break;
                            case 'open-orders':
                                return <Orders token={this.props.token} />;
                                break;
                            default:
                                return <h1>{this.props.content}</h1>;
                        }
                    } )()
                }
            </div>
        )
    }
}

export default MainContent;
