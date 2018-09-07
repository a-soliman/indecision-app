'use strict';

console.log('App Running');

// data
var appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var input = e.target.elements.option;
    var optionToAdd = input.value.trim();

    if (optionToAdd) {
        appData.options.push(optionToAdd);
        input.value = '';
        console.log(appData.options);
        renderIndecisionApp();
    }
};

var removeAllOptions = function removeAllOptions(e) {
    appData.options = [];
    renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
    var appRoot = document.querySelector('#app');

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
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            appData.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
