import React from 'react';

export default class GetSenderAddress extends React.Component{
    render(){
        const {onAction, wizardContext} = this.props;
        
        return (
            <div className='container'>
                <h3>Enter Sender's address: </h3>
                <label>Name: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-id='name'
                    data-step='from'
                    value={wizardContext.from.name}
                    autoFocus />
                <label>Street: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='from'
                    data-id='street'
                    value={wizardContext.from.street}
                     />
                <label>City: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='from'
                    data-id='city'
                    value={wizardContext.from.city} />
                <label>State: </label>
                <input 
                    type="text"
                    onChange={onAction}
                    data-step='from'
                    data-id='state' 
                    value={wizardContext.from.state}/>
                <label>Zip: </label>
                <input 
                    type="number"
                    onChange={onAction}
                    data-step='from'
                    data-id='zip' 
                    value={wizardContext.from.zip}/>
            </div>
        );
    }
}