import React from 'react';

export default class GetReceiverAddress extends React.Component{
    render(){
        const {onAction, wizardContext} = this.props;
        return (
            <div className='container'>
                <h3>Enter Receiver's address: </h3>
                <label>Name: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='to'
                    data-id='name'
                    value={wizardContext.to.name}
                    autoFocus />
                <label>Street: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='to'
                    data-id='street'
                    value={wizardContext.to.street} />
                <label>City: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='to'
                    data-id='city'
                    value={wizardContext.to.city} />
                <label>State: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='to'
                    data-id='state' 
                    value={wizardContext.to.state}/>
                <label>Zip: </label>
                <input 
                    type="number"
                    onChange={onAction}
                    data-step='to'
                    data-id='zip' 
                    value={wizardContext.to.zip}/>
            </div>
        );
    }
}