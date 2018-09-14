'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorage = function () {
    function LocalStorage() {
        _classCallCheck(this, LocalStorage);
    }

    _createClass(LocalStorage, [{
        key: 'getOptions',
        value: function getOptions() {
            return JSON.parse(localStorage.getItem('options'));
        }
    }, {
        key: 'save',
        value: function save(options) {
            options = JSON.stringify(options);
            localStorage.setItem('options', options);
        }
    }]);

    return LocalStorage;
}();

var ls = new LocalStorage();

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        return _this;
    }

    /* LIFE SYCLE HOOKS */


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var options = ls.getOptions() || [];
            this.setState(function () {
                return { options: options };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                ls.save(this.state.options);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Component will unmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return {
                    success: false,
                    message: 'Please provide an option to add.'
                };
            }
            if (this.state.options.indexOf(option) !== -1) {
                return {
                    success: false,
                    message: 'Option alerdy exist'
                };
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
            return {
                success: true,
                message: 'Option added succesfully.'
            };
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[random];
            console.log(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision!';
            var subtitle = 'Put your life in the hands of a computer!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    optionsCount: this.state.options.length > 0,
                    options: this.state.options,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h3',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Some default'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.optionsCount
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handleDeleteOptions,
                disabled: !props.options.length > 0
            },
            'Remove all'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option, i) {
            return React.createElement(Option, {
                key: i,
                content: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.content,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.content);
                } },
            'X'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined,
            message: ''
        };

        _this2.submit = _this2.submit.bind(_this2);
        _this2.clearMessage = _this2.clearMessage.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();

            var valueToAdd = e.target.elements.option.value.trim();
            var response = this.props.handleAddOption(valueToAdd);

            if (response.success) {
                this.setState(function () {
                    return { error: undefined, message: response.message };
                });
                e.target.elements.option.value = '';
            } else {
                this.setState(function () {
                    return { error: true, message: response.message };
                });
            }
        }
    }, {
        key: 'clearMessage',
        value: function clearMessage() {
            this.setState(function () {
                return { message: '' };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.submit },
                    React.createElement('input', { type: 'text', name: 'option', onChange: this.clearMessage }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                ),
                this.state.error && React.createElement(
                    'div',
                    { className: 'alert alert-danger' },
                    this.state.message
                ),
                !this.state.error && React.createElement(
                    'div',
                    { className: 'alert alert-success' },
                    this.state.message
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var appContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(IndecisionApp, null), appContainer);
