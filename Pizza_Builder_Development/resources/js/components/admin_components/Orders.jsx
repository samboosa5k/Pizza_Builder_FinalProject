import React from 'react';
import PopDetails from './PopDetails.jsx';

class Orders extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: '',
            orderItems: '',
            popContent: '',
            pop_id: '',
            pop_open: false,
        }
        this.popDetails = this.popDetails.bind( this );
    }

    componentDidMount() {
        fetch( 'http://127.0.0.1:8000/order/status/in_progress', {  // FETCH -> all 'in_progress' orders
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        } )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data.orders, orderItems: data.items } );
            } )
    }

    popDetails( event, id ) {   // For setting pop-up related state and ID
        event.preventDefault();

        let details = [];

        if ( this.state.orderItems !== '' ) {
            this.state.orderItems.forEach( ( elem, index ) => {
                if ( elem.order_id === id ) details = [...details, elem];   // Putting only relevant ingredients into array
            } );
        }

        this.setState( prevState => ( { pop_open: !prevState.pop_open, pop_id: id, popContent: details } ) );
    }

    render() {
        let apiResponse = 'Loading...';

        let popContent = 'Loading...';

        if ( this.state.pop_open === true ) {
            popContent = this.state.popContent;
        }

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={index} className="orders-single">
                    <div className="orders-single__information">
                        <span>
                            Order ID: <span className="orders-single__element">{elem.id}</span>
                        </span>
                        <span>
                            Name: <span className="orders-single__element">{elem.first_name} {elem.last_name}</span>
                        </span>
                        <span>
                            Ordered At: <span className="orders-single__element">{elem.created_at}</span>
                        </span>
                    </div>
                    <hr />
                    <div className="orders-single__bottom-menu">
                        <a href="#" onClick={( event ) => { this.popDetails( event, elem.id ) }} className="orders-single__details-button nostyle-links">Order Details</a>
                    </div>
                    {( this.state.pop_open === true && elem.id === this.state.pop_id ) && <PopDetails popContent={popContent} />}
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

/*
    Pizza where order_id === id
    pizza_order_ingredients where pizza_id = pizzas.pizza_id
*/
