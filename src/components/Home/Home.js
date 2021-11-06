import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css';
import { AiTwotoneMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { ImAddressBook } from "react-icons/im";
import {GrRun, GrEmergency} from "react-icons/gr";
import {RiRemoteControlFill, RiCustomerService2Fill} from "react-icons/ri";

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://vast-spire-92659.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
              
            });
    }, []);
    const handleAddToCart = (id) => {
        history.push(`/shipping/${id}`);
    }
    return (
        <>
            <div className="Banner">
               <img alt="Banner" src='https://i.ibb.co/7pjT1pP/banner.jpg'/>
            </div>
            <br/>
            <div className="top-text">
                <h2><i>Our Services</i></h2>
            </div>
                <div className="service-container"> 
                    {
                       services.map(service => <Service
                            key={service.key}
                            service={service}
                            handleAddToCart={handleAddToCart}
                        >
                        </Service>)
                    }
                </div>
          
                {/* About field */}
                    
                <div className="top">
                <div className="top-text">
                    <h2><i> Know About Us</i></h2>
                </div>
                <br/><br/>
                <div className="about-text">
                    <p>We have started our journey very recently with a great moto. We believe that time is the most precious thing. As the world is facing a hard time like never before, so it's hight time to think different. We are providing several delivery services support and planning for many more. Stay with DeliverWithUS and take the best service for your ease.</p>
                </div>  
                <br />
                <div className="card-container">
                    <div className="card">
                        <h3><GrRun/> Fastest Delivery</h3>
                    </div>
                    <div className="card">
                        <h3><GrEmergency/>Emergency Delivery</h3>
                    </div>
                    <div className="card">
                        <h3><RiRemoteControlFill/> Remote Delivery</h3>
                    </div>
                    <div className="card">
                        <h3><RiCustomerService2Fill/>Client Service</h3>
                    </div>
                </div>
                </div>

              {/* Contact field */}
                <div className="top">
                    <div className="top-text">
                        <h2><i>Contact Us</i></h2>
                    </div>
                <div className="address">
                <br/><br/>
                    <h3><ImAddressBook/>  Address</h3>
                    <p>Street-18, Sector-10, Uttara, Dhaka, Bangladesh</p>
                    <h3><HiPhone/>  Phone</h3>
                    <p>+880 168*******</p>
                    <h3><AiTwotoneMail /> Email</h3>
                    <p>deliverwithus@gmail.com</p>
                </div>
                <br/><br/>
                <h2>Send Message Directly</h2>
                <div className="message">
                    <input type="text" placeholder="Enter Name" />
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Enter Email" />
                    <input type="text" placeholder="Message" />
                    <button>Send</button>
                </div>
                <br/>
                <br/>
                </div>
           
           
        </>
    );
};

export default Home;