import React from 'react';
import Header from './partials/headers';
import Steps from './components/steps/index-steps';
import Wizard from './containers/wizard';
import ShippingObj from './partials/shipping-label';
import ShippingOption from './components/shipping-label';

export default class ShippingLabelMaker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showLabel: false
        }
    };
    handleLabel = (info) => {
        this.setState(() => ({
            showLabel: true,
            finalObj: info
        }));
    };
    render(){
        return(
            <div>
                {this.state.showLabel ? <ShippingOption shippingObj={this.state.finalObj} /> :
                <Wizard 
                    steps={Steps}
                    header={Header}
                    wizardContext={ShippingObj}
                    onComplete={this.handleLabel}
                />}
            </div>
        );
    }
}