import React from 'react';
import { shippingCost} from '../../partials/utils';

export default class Confirm extends React.Component{
    render(){
        const {wizardContext} = this.props;
        return(
            <div>
                <h3>Confirm your information</h3>
                <h4>Sender's Information: </h4>
                <ul>
                    <li>Name: {wizardContext.from.name}</li>
                    <li>Street: {wizardContext.from.street}</li>
                    <li>City: {wizardContext.from.city}</li>
                    <li>State: {wizardContext.from.state}</li>
                    <li>Zip: {wizardContext.from.zip}</li>
                </ul>
                <h4>Receiver's Information: </h4>
                <ul>
                    <li>Name: {wizardContext.to.name}</li>
                    <li>Street: {wizardContext.to.street}</li>
                    <li>City: {wizardContext.to.city}</li>
                    <li>State: {wizardContext.to.state}</li>
                    <li>Zip: {wizardContext.to.zip}</li>
                </ul>
                <h4>Weight: </h4>
                <ul>
                    <li>Weight: {wizardContext.weight}</li>
                </ul>
                <h4>Shipping Option: </h4>
                <ul>
                    <li>Shipping Option: {wizardContext.shippingLabel ==1 ? 'Ground' : 'Priority'}</li>
                </ul>
                <h4>Shipping Cost: Rs: {shippingCost(wizardContext.weight, wizardContext.shippingLabel)}</h4>
                <button onClick={this.props.onAction}>Confirm</button>
            </div>
        );
    }
};