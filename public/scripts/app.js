'use strict';

console.log('App Running');

// data
var appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appData.title
    ),
    React.createElement(
        'p',
        null,
        appData.subtitle
    )
);

var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
