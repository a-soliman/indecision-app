import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
                className='big-button'
                onClick = {props.handlePick}
                disabled={!props.optionsCount}
            >
                What should I do?
            </button>
        </div>
    );
};

export default Action;