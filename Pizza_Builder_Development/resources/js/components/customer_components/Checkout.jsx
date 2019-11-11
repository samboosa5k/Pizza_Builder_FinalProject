import React from 'react';

class Checkout extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            street_and_housenumber: '',
            postcode: '',
            city: '',
            price: 10.25,
            csrf_token: '',
            checkout_object: ''
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    componentDidMount() {
        this.setState( { csrf_token: document.getElementsByName( '_token' )[0].value } );
    }

    handleSubmit( event ) {
        event.preventDefault();

        this.setState( {
            checkout_object: {
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "phone_number": this.state.phone_number,
                "street_and_number": this.state.street_and_housenumber,
                "postcode": this.state.postcode,
                "city": this.state.city,
                "price": "make algorith, jasper",
                "order": this.props.ingredientProps
            }
        } )

        /* fetch( 'http://127.0.0.1:8000/order/finalize', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.state.csrf_token
            },
            body: JSON.stringify( {
                'first_name': this.state.first_name,
                'last_name': this.state.last_name,
                'phone_number': this.state.phone_number,
                'street_and_housenumber': this.state.street_and_housenumber,
                'postcode': this.state.postcode,
                'city': this.state.city,
                'price': this.state.price,
            } )
        } )
            .then( response => response.json() )
            .then( data => {
                console.log( data );
            } ) */
    }

    handleChange( event ) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState( { [nam]: val } );
    }

    render() {

        return (
            <>
                <div className="admin-login__wrapper">

                    <div style={{ padding: 1 + "rem", backgroundColor: "white" }}>
                        <strong>What comes from the pizza builder:</strong>
                        <br />
                        {JSON.stringify( this.props.ingredientProps )}
                    </div>

                    <hr />

                    <form className="form-group admin-login__form" onSubmit={this.handleSubmit}>
                        <label className="admin-login__label" htmlFor="first_name">First Name:</label>
                        <input type="text" className="admin-login__input" id="first_name" name="first_name" onChange={this.handleChange} />

                        <label className="admin-login__label" htmlFor="last_name">Last Name:</label>
                        <input type="text" className="admin-login__input" id="last_name" name="last_name" onChange={this.handleChange} />

                        <label className="admin-login__label" htmlFor="phone_number">Phone:</label>
                        <input type="text" className="admin-login__input" id="phone_number" name="phone_number" onChange={this.handleChange} />

                        <label className="admin-login__label" htmlFor="street_and_housenumber">Street & House Nr.:</label>
                        <input type="text" className="admin-login__input" id="street_and_housenumber" name="street_and_housenumber" onChange={this.handleChange} />

                        <label className="admin-login__label" htmlFor="postcode">Postcode:</label>
                        <input type="text" className="admin-login__input" id="postcode" name="postcode" onChange={this.handleChange} />

                        <label className="admin-login__label" htmlFor="city">City:</label>
                        <input type="text" className="admin-login__input" id="city" name="city" onChange={this.handleChange} />

                        <button type="submit" className="btn btn-default admin-login__button">Submit</button>
                    </form>

                    <hr />

                    <div style={{ padding: 1 + "rem", backgroundColor: "white" }}>
                        <strong>What is sent to backend:</strong>
                        <br />
                        {JSON.stringify( this.state.checkout_object )}
                    </div>
                </div>

            </>
        )
    }
}

export default Checkout;
