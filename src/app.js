import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.css';


const appContainer = document.querySelector('#app');
ReactDOM.render(<IndecisionApp />, appContainer);