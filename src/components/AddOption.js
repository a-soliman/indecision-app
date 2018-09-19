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
                {this.state.error && 
                    <div className="add-option__error">
                        {this.state.message}
                    </div>
                }
                {!this.state.error && 
                    <div className="add-option__success">
                        {this.state.message}
                    </div>
                }
                <form className='add-option' onSubmit={this.submit}>
                    <input className='add-option__input' type="text" name="option" onChange={this.clearMessage} />
                    <button className='button'>Add Option</button>
                </form>
                
            </div>
        );
    }
}