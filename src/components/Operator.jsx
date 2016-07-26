var React = require('react');

var Operator = React.createClass({
    onClick: function(e) {
        this.props.onClick(this.props.text, e);
    },
    render: function() {
        var type = this.props.type ? this.props.type : "primary";
        return (
            <div className="col-xs-12">
                <button className={"btn btn-" + type + " btn-block"} onClick={this.onClick}>
                    {this.props.text}
                </button>
            </div>
        );
    }
});

module.exports = Operator;
