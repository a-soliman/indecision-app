console.log('App Running');

// JSX - JavaScript XML
const template = (
    <div>
        <h1>Indecision App!</h1>
        <p>This is some info</p>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);