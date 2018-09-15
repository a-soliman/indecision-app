import React from 'react';

/* COMPONENTS */
import LocalStorage from './LocalStorage';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';


const ls = new LocalStorage();

export default class IndecisionApp extends React.Component {
    state = {
        options: []
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

    handleDeleteOptions = () => {
        this.setState(() => ( { options: []} ));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(option => option !== optionToRemove)
            };
        });
    }

    handleAddOption = (option) => {
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

    handlePick = ()  => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        console.log(option);
    }

    render() {
        const title = 'Indecision!';
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