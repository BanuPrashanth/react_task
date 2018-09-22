import React from 'react';

export default class ShippingOption extends React.Component{
    render(){
        return(
            <div>
                <h3>Select a Shipping Option:</h3>
                <label>Shipping Option:</label>
                <select defaultValue={this.props.wizardContext.shippingLabel} onChange={this.props.onAction} data-id='shippingLabel'>
                    <option  value="1">Ground</option>
                    <option value="2">Priority</option>
                </select>
            </div>
        );
    }
}