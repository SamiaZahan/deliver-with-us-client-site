import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css"
const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://vast-spire-92659.herokuapp.com/services',data)
        .then(res => {
            console.log(res)
            reset();
            alert('Service added Succesfully')
        })
    }
     
    return (
        <div className="add-service">
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="add-form">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
                <input {...register("img")} placeholder="Image URL" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;