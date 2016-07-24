var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router history={browserHistory}>
        <Route  path="/" component={Base}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;
