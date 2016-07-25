var React = require('react');
var KeyBoardButton = require('./KeyBoardButton.jsx');

var KeyBoard = React.createClass({
    onDigit: function(value) {
        this.props.onDigit(value);
    },
    onClear: function() {
        this.props.onClear();
    },
    onClickDot: function() {
        this.props.onClickDot();
    },
    render: function() {
        return (
            <div>
                <div className="row">
                    <KeyBoardButton onButtonClick={this.onDigit} value="1" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="2" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="3" />
                </div>
                <div className="row">
                    <KeyBoardButton onButtonClick={this.onDigit} value="4" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="5" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="6" />
                </div>
                <div className="row">
                    <KeyBoardButton onButtonClick={this.onDigit} value="7" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="8" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="9" />
                </div>
                <div className="row">
                    <KeyBoardButton onButtonClick={this.onClear} value="C" />
                    <KeyBoardButton onButtonClick={this.onDigit} value="0" />
                    <KeyBoardButton onButtonClick={this.onClickDot} value="." />
                </div>
            </div>
        );
    }
});

module.exports = KeyBoard;
