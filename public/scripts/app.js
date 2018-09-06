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

/* PLAYGOUND DATA */
var user = {
    name: 'Ahmed',
    age: 30,
    location: 'San Francisco, CA'
};

function getLocation(user) {
    if (!user.location) return;
    return React.createElement(
        'p',
        null,
        'location: ',
        user.location
    );
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user)
);

var appRoot = document.querySelector('#app');
ReactDOM.render(templateTwo, appRoot);
