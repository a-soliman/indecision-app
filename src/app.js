import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';

const appContainer = document.querySelector('#app');
ReactDOM.render(<IndecisionApp />, appContainer);