console.log('App Running');

// data
const appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{appData.title}</h1>
        <p>{appData.subtitle}</p>
    </div>
);

const appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);