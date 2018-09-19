import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.content}</p>
        <button 
            className='button button--link'
            onClick={(e)=> {
            props.handleDeleteOption(props.content)
        }}>remove</button>
    </div>
);

export default Option;