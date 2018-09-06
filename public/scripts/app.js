console.log('App Running');

// JSX - JavaScript XML
const template = <p>This is JSX from app.js</p>;
const appRoot = document.querySelector('#app');

ReactDom.render(template, appRoot);