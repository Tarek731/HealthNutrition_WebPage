// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// var Profile = require("../components/children/Profile");
var Main = require("../components/Main");
var Login = require("../components/children/Login");
var Signup = require("../components/children/Signup");
// var Landing = require("../views/Landing")
import Landing from "../views/Landing";
var Register = require("../components/children/Register");
var LoginRequired = require("../components/children/LoginRequired");
var Dashboard = require("../views/Dashboard");

// Export the Routes
module.exports = (
// The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={Main}>


      {/* If user selects Child1 then show the appropriate component*/}

      <Route path="login" component={Login} />
      
        <Route path="loginrequired" component={LoginRequired} />

      <Route path="signup" component={Signup} />
      <Route path="landing" component={Landing} />
      
 
        <Route path="register" component={Register} />
        <Route path="dashboard" component={Dashboard} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);
