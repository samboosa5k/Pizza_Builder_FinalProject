import React from 'react';

class Orders extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: ''
        }
    }

    componentDidMount() {
        fetch( 'http://127.0.0.1:8000/order/status/in_progress', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        } )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data } );
            } )
    }

    render() {
        let apiResponse = 'Loading...';

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={index} className="orders-single">
                    <div>
                        Order ID: <span className="orders-single__element">{elem.id}</span>
                    </div>
                    <div>
                        Name: <span className="orders-single__element">{elem.first_name} {elem.last_name}</span>
                    </div>
                    <div>
                        Ordered At: <span className="orders-single__element">{elem.created_at}</span>
                    </div>
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

export default Orders;
