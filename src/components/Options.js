import React from 'react';

/* COMPONENTS */
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className='wedget-header'>
                <h3 className='wedget-header__title'>Your Options</h3>  
                <button 
                    className='button button--link'
                    onClick={props.handleDeleteOptions}
                    disabled={!props.options.length > 0}
                >
                    Remove all
                </button>
            </div>
            
            {props.options.length === 0 && <p className='wedget__message'>Please add an option to get started!</p>}
            {
                props.options.map( (option, i) => (
                    <Option 
                        key={i} 
                        content={option} 
                        count={i + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

export default Options;