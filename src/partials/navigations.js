import React from 'react';

const Navigation = (props) => (
     <div>
            <div className='button-container'>
                {props.showPrevious && 
                    <button className='button'
                        onClick={props.btnPrevious}>
                        Previous
                    </button>}
                {props.showNext && 
                    <button className='button'
                        onClick={props.btnNext}>
                        Next
                    </button>}
            </div>
    </div>
);

export default Navigation;
