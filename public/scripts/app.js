'use strict';

console.log('App Running');

// data
var appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
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
    appData.subtitle && React.createElement(
        'p',
        null,
        appData.subtitle
    ),
    React.createElement(
        'p',
        null,
        appData.options && appData.options.length > 0 ? 'here are your options..' : 'No Options!'
    )
);

/* PLAYGOUND DATA */
var user = {
    name: 'Andrew',
    age: 26,
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
        user.name ? user.name + '!' : 'Anonymous'
    ),
    user.age && user.age > 17 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user)
);

var appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);
