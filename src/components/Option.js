import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.content}
            <button onClick={(e)=> {
                props.handleDeleteOption(props.content)
            }}>X</button>
        </div>
    );
};

export default Option;