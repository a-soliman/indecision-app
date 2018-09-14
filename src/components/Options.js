import React from 'react';

/* COMPONENTS */
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}
                disabled={!props.options.length > 0}
            >
                Remove all
            </button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map( (option, i) => (
                    <Option 
                        key={i} 
                        content={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

export default Options;