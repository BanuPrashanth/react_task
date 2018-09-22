import React from 'react';

const shippingLabel = (props) => (
    <div>
        <h3>Shipping Label: </h3>
        <h4>From: </h4>
        <div>
            <label>Name: {props.shippingObj.from.name} </label>
            <label>Street: {props.shippingObj.from.street}</label>
            <label>City: {props.shippingObj.from.city}</label>
            <label>State: {props.shippingObj.from.state}</label>
            <label>Zip: {props.shippingObj.from.zip}</label>
        </div>
        <h4>To: </h4>
        <div>
            <label>Name: {props.shippingObj.to.name}</label>
            <label>Street: {props.shippingObj.to.street}</label>
            <label>City: {props.shippingObj.to.city}</label>
            <label>State: {props.shippingObj.to.state}</label>
            <label>Zip: {props.shippingObj.to.zip}</label>
        </div>
        <h4>Weight: {props.shippingObj.weight}</h4>
        <h4>Shipping Option: {props.shippingObj.shippingLabel ==1 ? 'Ground' : 'Priority'}</h4>
    </div>
);

export default shippingLabel;
