import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './Inventory.css'
const Inventory = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://vast-spire-92659.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                
            });
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Want to Delete?');
        if(proceed){
            const url = `https://vast-spire-92659.herokuapp.com/orders/${id}`;
            fetch(url,{
                method: 'DELETE'    
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.deletedCount){
                    alert('Successfully Deleted');
                    const remaining= orders.filter(order => order._id !== id)
                    setOrders(remaining);    
                }
                
            });
        }  
    }
    const handleStatus = id => {
        const status= {status: 'Processed'};
        const url = `https://vast-spire-92659.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                    fetch('https://vast-spire-92659.herokuapp.com/orders')
                        .then(res => res.json())
                        .then(data => {
                            setOrders(data);
                            
                        });
            }
        })

    }
    return (
        <div className="orders-container">
        {
            orders.map(order => <Order
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
            >
            </Order>)
        }
    </div>
    );
};

export default Inventory;