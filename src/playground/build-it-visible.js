const app = {
    title: 'Visible Toggle',
    details: 'These are the details',
    show: false
};

const toggleDetails = (e) => {
    app.show = !app.show;

    if ( e.target.innerText == 'Show details' ) {
        e.target.innerText = 'Hide Details';
    } else {
        e.target.innerText = 'Show details';
    }

    renderApp();
};

const renderApp = () => {
    const container = document.querySelector('#app');
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>Show details</button>
            <p>{app.show && app.details}</p>
        </div>
    );

    ReactDOM.render(template, container);
}

renderApp();