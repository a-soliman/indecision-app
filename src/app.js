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


/* PLAYGOUND DATA */
const user = {
    name: 'Ahmed',
    age: 30,
    location: 'San Francisco, CA'
};

function getLocation(user) {
    if ( !user.location ) return;
    return <p>location: {user.location}</p>; 
}

const templateTwo = (
    <div>
        <h2>{user.name + '!'}</h2>
        <p>Age: {user.age}</p>
        {getLocation(user)}
    </div>
);

const appRoot = document.querySelector('#app');
ReactDOM.render(templateTwo, appRoot);