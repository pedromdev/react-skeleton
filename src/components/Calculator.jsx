var React = require('react');
var InputPanel = require('./InputPanel.jsx');
var KeyBoard = require('./KeyBoard.jsx');

var Calculator = React.createClass({
    handleDigit: function(value) {
        this.refs.input.append(value);
    },
    handleClear: function() {
        this.refs.input.clear();
    },
    handleClickDot: function(value) {
        this.refs.input.insertDot();
    },
    render: function() {
        return (
            <div>
                <h1 className="text-center">Calculator</h1>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <InputPanel ref="input" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-9">
                                <KeyBoard onClear={this.handleClear}
                                    onDigit={this.handleDigit}
                                    onClickDot={this.handleClickDot} />
                            </div>
                            <div className="col-xs-3">
                                <div className="row">
                                    <div className="col-xs-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
