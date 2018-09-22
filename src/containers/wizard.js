import React from 'react';
import Navigation from '../partials/navigations';

export default class Wizard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            compState: 1,
            showNext: true,
            showPrevious: false,
            wizardContext: this.props.wizardContext
        }
    }
    handleNext = () => {
        this.setState((prevState) => {
            const compState = prevState.compState + 1;
            return{
                compState,
                showPrevious: compState > 1,
                showNext: !(compState === this.props.steps.length)
            }
        });
    };
    handlePrevious = () => {
        this.setState((prevState) => {
            const compState = prevState.compState - 1;
            return{
                compState,
                showPrevious: !(compState === 1),
                showNext: true
            }
        });
    };
    handleData = (e) => {
        const step = e.target.getAttribute('data-step');
        const key = e.target.getAttribute('data-id');
        const value = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            wizardContext: {
                ...prevState.wizardContext,
                [step]:{
                    ...prevState.wizardContext[step],
                    [key]: value
                }
            }
        }));
    };
    handleOtherData = (e) => {
        const key = e.target.getAttribute('data-id');
        const value = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            wizardContext:{
                ...prevState.wizardContext,
                [key] : value
            }
        }));
    };
    onComplete = () => {
        this.props.onComplete(this.state.wizardContext)
    }
    render(){
        const Header = this.props.header;
        return(
            <div>
               <Header />
               {React.cloneElement(this.props.steps[this.state.compState -1],
                    {onAction: this[this.props.steps[this.state.compState -1].props.onAction],
                    wizardContext: this.state.wizardContext
                })}
               <Navigation 
                    showConfirm={this.state.showConfirm}
                    showPrevious={this.state.showPrevious} 
                    showNext={this.state.showNext}
                    btnNext={this.handleNext}
                    btnPrevious={this.handlePrevious} />
            </div>
        );
    }
}

