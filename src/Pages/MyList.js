import React from 'react';
import Exhibition from '../components/Exhibition'

function MyList(props) {
    return <div>
    {props.list.map((item) =>{
           return <Exhibition selected={item} key={item.id} removeFromCart={props.removeFromCart} label="Remove from Cart" />
        })}
    </div>
}

export default MyList
