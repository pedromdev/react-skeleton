var React = require('react');

var InputPanel = React.createClass({
    getInitialState: function() {
        return {value: "", insertDot: false};
    },
    onKeyDown: function(e) {
        var ch = String.fromCharCode(e.keyCode);

        if (e.keyCode == 190) {
            this.insertDot();
        } else if (e.keyCode == 46 || e.keyCode == 8) {
            this.delete();
        } else {
            this.append(ch);
        }

        return false;
    },
    append: function(ch) {
        if (!isNaN(new Number(ch))) {
            var value = this.state.value;

            if (this.state.insertDot) {
                value += ".";
            }
            value += ch;
            this.setState({value: value, insertDot: false});
        }
    },
    insertDot: function() {
        var value = this.state.value;
        var insert = value.length > 0 && value.indexOf(".") == -1;
        this.setState({insertDot: insert});
    },
    delete: function() {
        var value = this.state.value;
        var lastChar = value.length - 1;

        if (value.indexOf(".") == lastChar - 1) {
            lastChar--;
        }
        value = value.substr(0, lastChar);
        this.setState({value: value, insertDot: false});
    },
    clear: function() {
        this.setState({value: "", insertDot: false});
    },
    render: function() {
        return (
            <input className="form-control"
                dir="rtl"
                readOnly="true"
                onKeyDown={this.onKeyDown}
                value={this.state.value} />
        );
    }
});

module.exports = InputPanel;
