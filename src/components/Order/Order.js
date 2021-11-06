import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Order.css';

const Order = (props) => {
    const { _id,name, email, address, city, phone, order,status} = props.order;
    const [service, setService] = useState({});
    
    useEffect(()=>{
        fetch(`https://vast-spire-92659.herokuapp.com/services/${order}`)
        .then(res=> res.json())
        .then(data=>setService(data))
    },[]);
   


    return (
        <div className="order">
            <div>
                <h4 className="Client">{name}</h4>
                <p><small>Address: {address, city}</small></p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Service:{service.name}</p>
                {/* <p>Order Id: {_id}</p> */}
                <p>Status: <button onClick={() => props.handleStatus(_id)}>{status}</button></p>
                <br />
                <button
                    onClick={() => props.handleDelete(_id)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} />Remove</button>
            </div>
        </div>
    );
};

export default Order;