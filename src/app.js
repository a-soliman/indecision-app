class LocalStorage {
    constructor() {}
    
    getOptions() {
        return JSON.parse(localStorage.getItem('options'));
    }
    save(options) {
        options = JSON.stringify(options);
        localStorage.setItem('options', options);
    }
}

const ls = new LocalStorage();

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };

        this.handleDeleteOptions    = this.handleDeleteOptions.bind(this);
        this.handleAddOption        = this.handleAddOption.bind(this);
        this.handleDeleteOption     = this.handleDeleteOption.bind(this);
        this.handlePick             = this.handlePick.bind(this);
    }

    /* LIFE SYCLE HOOKS */
    componentDidMount() {
        let options = ls.getOptions() || [];
        this.setState(() => ( {options} ));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            ls.save(this.state.options);
        }
    }
    componentWillUnmount() { console.log('Component will unmount'); }

    handleDeleteOptions() {
        this.setState(() => ( { options: []} ));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(option => option !== optionToRemove)
            };
        });
    }

    handleAddOption(option) {
        if ( !option ) {
            return {
                success: false, 
                message: 'Please provide an option to add.'
            };
        } 
        if ( this.state.options.indexOf(option) !== -1 ) {
            return {
                success: false, 
                message: 'Option alerdy exist'
            };
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
        return {
            success: true,
            message: 'Option added succesfully.'
        };
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        console.log(option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div> 
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    optionsCount = {this.state.options.length > 0}
                    options = {this.state.options}
                    handlePick = {this.handlePick}
                    />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption= {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Some default'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePick}
                disabled={!props.optionsCount}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}
                disabled={!props.options.length > 0}
            >
                Remove all
            </button>
            <p>Options Component</p>
            {
                props.options.map( (option, i) => (
                    <Option 
                        key={i} 
                        content={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.content}
            <button onClick={(e)=> {
                props.handleDeleteOption(props.content)
            }}>X</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
            message: ''
        };

        this.submit = this.submit.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
    }
    submit(e) {
        e.preventDefault();

        const valueToAdd    = e.target.elements.option.value.trim();
        const response      = this.props.handleAddOption(valueToAdd);

        if ( response.success ) {
            this.setState(() => ( { error: undefined, message: response.message } ));
            e.target.elements.option.value = '';
        } 
        else {
            this.setState(() => ( { error: true, message: response.message } ));
        }
    }

    clearMessage() {
        this.setState(() => ( {message: ''} ));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" name="option" onChange={this.clearMessage} />
                    <button>Add Option</button>
                </form>
                {this.state.error && 
                    <div className="alert alert-danger">
                        {this.state.message}
                    </div>
                }
                {!this.state.error && 
                    <div className="alert alert-success">
                        {this.state.message}
                    </div>
                }
            </div>
        );
    }
}

const appContainer = document.querySelector('#app');
ReactDOM.render(<IndecisionApp />, appContainer);