var React = require('react');

var KeyBoardButton = React.createClass({
    onClick: function(e) {
        this.props.onButtonClick(this.props.value, e);
    },
    render: function() {
        return (
            <div className="col-xs-4">
                <button className="btn btn-default btn-block" onClick={this.onClick}>
                    {this.props.value}
                </button>
            </div>
        );
    }
});

module.exports = KeyBoardButton;
