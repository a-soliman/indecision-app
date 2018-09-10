console.log('App Running');

// data
const appData = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.option;
    const optionToAdd = input.value.trim();
    
    if ( optionToAdd ) {
        appData.options.push(optionToAdd);
        input.value = '';
        console.log(appData.options);
        renderIndecisionApp();
    } 
};

const removeAllOptions = (e) => {
    appData.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appData.options.length);
    const slectedOption = appData.options[randomNum];
    console.log(slectedOption);
};


const renderIndecisionApp = () => {
    const appRoot = document.querySelector('#app');
    
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{appData.title}</h1>
            {appData.subtitle && <p>{appData.subtitle}</p>}
            <p>{appData.options && appData.options.length > 0 ? 
                'here are your options..'
                : 
                'No Options!'}
            </p>
            <button disabled={appData.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button disabled={appData.options.length == 0} onClick={removeAllOptions}>Remove all</button>
            <ol>
                {
                    appData.options.map( (option, i) => <li key={i}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();