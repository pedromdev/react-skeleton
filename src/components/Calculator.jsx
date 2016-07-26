var React = require('react');
var InputPanel = require('./InputPanel.jsx');
var KeyBoard = require('./KeyBoard.jsx');
var OperatorManager = require('./OperatorManager.jsx');

var Calculator = React.createClass({
    getInitialState: function() {
        return {lastValue: 0, deleteDisplayedResult: false};
    },
    handleDigit: function(value) {
        if (this.state.deleteDisplayedResult) {
            this.refs.input.setValue(value);
            this.setState({lastValue: 0, deleteDisplayedResult: false});
        } else {
            this.refs.input.append(value);
        }
    },
    handleClear: function() {
        this.refs.input.clear();
        this.setState({lastValue: 0, deleteDisplayedResult: false});
    },
    handleClickDot: function(value) {
        this.refs.input.insertDot();
    },
    onAppend: function(e) {
        if (this.state.deleteDisplayedResult) {
            this.handleClear();
        }
    },
    getResult: function(callback) {
        var inputValue = this.refs.input.getValue();
        var result;

        if (inputValue.length == 0) {
            return null;
        }
        return callback(this.state.lastValue, new Number(inputValue));
    },
    onExecute: function(callback) {
        var result = this.getResult(callback);

        if (result == null) {
            return;
        }
        this.refs.input.clear();
        this.setState({lastValue: result});
    },
    onResult: function(callback) {
        var result = this.getResult(callback);

        if (result == null) {
            return;
        }
        this.refs.input.setValue(result);
        this.setState({lastValue: 0, deleteDisplayedResult: true});
    },
    render: function() {
        return (
            <div>
                <h1 className="text-center">Calculator</h1>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <InputPanel ref="input" onAppend={this.onAppend} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-9">
                                <KeyBoard onClear={this.handleClear}
                                    onDigit={this.handleDigit}
                                    onClickDot={this.handleClickDot} />
                            </div>
                            <div className="col-xs-3">
                                <OperatorManager onExecute={this.onExecute}
                                    onResult={this.onResult} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
