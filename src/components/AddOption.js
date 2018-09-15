import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
            message: ''
        };

        this.clearMessage = this.clearMessage.bind(this);
    }
    submit = (e) => {
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