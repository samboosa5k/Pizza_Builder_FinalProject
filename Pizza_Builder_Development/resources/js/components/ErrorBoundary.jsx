/* 
    Source: https://reactjs.org/docs/error-boundaries.html
*/

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { hasError: false };
    }

    static getDerivedStateFromError( error ) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch( error, errorInfo ) {
        // You can also log the error to an error reporting service
        console.log( "there is an error" );
    }

    render() {
        if ( this.state.hasError ) {
            // You can render any custom fallback UI
            return <p>Something went wrong</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;