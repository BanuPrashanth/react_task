import React from 'react';

export default class Weight extends React.Component{
    render(){
        return(
            <div>
                <h3>Enter Weight: </h3>
                <label>Weight: </label>
                <input 
                    type="number"
                    onChange={this.props.onAction}
                    data-id='weight'
                    value={this.props.wizardContext.weight}
                    autoFocus />
            </div>
        );
    }
}
