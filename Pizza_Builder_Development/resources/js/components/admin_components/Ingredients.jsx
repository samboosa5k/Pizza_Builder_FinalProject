import React from 'react';

class Ingredients extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: ''
        }
    }

    componentDidMount() {
        fetch( 'http://127.0.0.1:8000/api/ingredients' )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data } );
            } )
    }

    render() {
        let apiResponse = 'Loading...';

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={index} className="ingredients-single">
                    {elem.name}
                </div>
            ) )
        }

        return (
            <>
                {apiResponse}
            </>
        )
    }
}

export default Ingredients;
