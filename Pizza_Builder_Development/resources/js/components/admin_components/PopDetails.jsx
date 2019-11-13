import React from 'react';

const PopDetails = ( props ) => {
    return <>
        <div className="orders-single__popDetails">
            {
                props.popContent.map( ( elem, index ) => {
                    let header = '';

                    if ( index === 0 || props.popContent[index - 1].pizza_id !== undefined && props.popContent[index].pizza_id !== props.popContent[index - 1].pizza_id ) {
                        header = `Pizza ${index}`;
                    }

                    return <>
                        <h4>{header}</h4>
                        <p>{props.popContent[index].name}</p>
                    </>
                } )
            }
        </div>
    </>
}

export default PopDetails;
