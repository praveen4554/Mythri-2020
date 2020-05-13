import React from 'react'

function CheckoutChild(props) {
    return (
        <div>
            <button onClick= {() => props.eventHandler('infoSubmit')}>Submit</button>
            
        </div>
    )
}

export default CheckoutChild
