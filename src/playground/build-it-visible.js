class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.title      = 'Visiblility Toggle';
        this.details    = 'These are the details';
        this.state      = {
            visible: false
        };

        this.toggleDetails = this.toggleDetails.bind(this);

    }

    toggleDetails(e) {
        console.log('toggling...');
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
        
        this.updateButtonText(e);
    }

    updateButtonText(e) {
        const button = e.target;
        button.innerText = button.innerText == 'Show details' ? 'Hide details' : 'Show details';
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.toggleDetails}>Show details</button>
                <p>{this.state.visible && this.details}</p>
            </div>
        );
    }
}

const appRoot = document.querySelector('#app');
ReactDOM.render(<VisibilityApp />, appRoot);
