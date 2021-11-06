import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const {serviceId} = useParams();
  
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch(`https://vast-spire-92659.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json())
        .then(data=>setService(data))
    }, [])
    const onSubmit = data => {
        data.order= serviceId;
        data.status="Pending";
        fetch('https://vast-spire-92659.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Taken Successfully');
                reset();
            }
        })
    };
    return (
        <div className="shipping">
            
            <div className="order-service">
                <h2>{service.name}</h2>
                <img src={service.img} alt=""/>
                <p>Cost: {service.price}</p>
            </div>
            
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>    
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;