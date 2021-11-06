import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const Service = (props) => {
    const { _id, name, img, price, description} = props.service;

    return (
        <div className="service">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="detail">
                <h3 className="service-name">{name}</h3>
                <p><small>{description}</small></p>
                <p>Charge: {price}</p>
                <br />
                <button
                    onClick={() => props.handleAddToCart(_id)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Service;