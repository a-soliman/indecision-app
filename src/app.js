console.log('App Running');

// data
const appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{appData.title}</h1>
        {appData.subtitle && <p>{appData.subtitle}</p>}
        <p>{appData.options && appData.options.length > 0 ? 
            'here are your options..'
            : 
            'No Options!'}</p>
        
    </div>
);


/* PLAYGOUND DATA */
const user = {
    name: 'Andrew',
    age: 26,
    location: 'San Francisco, CA'
};

function getLocation(user) {
    if ( !user.location ) return;
    return <p>location: {user.location}</p>; 
}

const templateTwo = (
    <div>
        <h2>{user.name ? user.name + '!' : 'Anonymous'}</h2>
        {user.age && user.age > 17 && <p>Age: {user.age}</p>}
        {getLocation(user)}
    </div>
);

const appRoot = document.querySelector('#app');
ReactDOM.render(template, appRoot);