var React = require('react');
var Operator = require('./Operator.jsx');

var OperatorManager = React.createClass({
    getInitialState: function() {
        return {lastOperation: ""};
    },
    getOperation: function(operation) {
        var callbacks = {
            "+": function(a, b) {
                return a + b;
            },
            "-": function(a, b) {
                return a - b;
            },
            "x": function(a, b) {
                return a * b;
            },
            "/": function(a, b) {
                return a / b;
            }
        };
        return callbacks[operation]? callbacks[operation] : function(a, b) { return b };
    },
    executeLastOperation: function() {
        if (this.state.lastOperation.length > 0) {
            this.props.onExecute(this.getOperation(this.state.lastOperation));
        }
    },
    onExecute: function(text, e) {
        this.props.onExecute(this.getOperation(this.state.lastOperation));
        this.setState({lastOperation: text});
    },
    onResult: function() {
        this.props.onResult(this.getOperation(this.state.lastOperation));
        this.setState({lastOperation: ""});
    },
    render: function() {
        return (
            <div>
                <div className="row">
                    <Operator onClick={this.onExecute} text="+" />
                </div>
                <div className="row">
                    <Operator onClick={this.onExecute} text="-" />
                </div>
                <div className="row">
                    <Operator onClick={this.onExecute} text="x" />
                </div>
                <div className="row">
                    <Operator onClick={this.onExecute} text="/" />
                </div>
                <div className="row">
                    <Operator onClick={this.onResult} text="=" type="success" />
                </div>
            </div>
        );
    }
});

module.exports = OperatorManager;
