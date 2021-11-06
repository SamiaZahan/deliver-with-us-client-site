import React from 'react';
import  { useEffect, useState } from 'react';
import Order from '../Order/Order';
import useAuth from '../../hooks/useAuth';
import './OrderReview.css';

const OrderReview = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://vast-spire-92659.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(obj=>obj.email===user.email)
                setOrders(filtered);      
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
    const handleStatus = id => {};
 
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

export default OrderReview;