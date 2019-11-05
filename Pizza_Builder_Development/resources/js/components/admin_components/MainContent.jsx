import React from 'react';
import Ingredients from './Ingredients.jsx';

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
