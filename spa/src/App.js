import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./Home";
import Locked from "./Locked";
import Profile from "./Profile";
import { oktaConfig } from "./lib/oktaConfig";
const CALLBACK_PATH = "/login/callback";

const oktaAuth = new OktaAuth(oktaConfig);
console.log('window.location');
console.log(window.location);

// var request = require('request');

// var headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Authorization': 'Basic MG9hb....'
// };

// var options = {
//     url: 'https://dev-2313318.okta.com/oauth2/v1/token',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={CALLBACK_PATH} exact component={LoginCallback} />
        <SecureRoute path="/locked" exact component={Locked} />
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </Security>
  );
};

export default App;

/* secure route on entire application
const App = () => { 
  return (
    <Router>
      <Security {...config} >
        <Switch>
          <Route path="/login/callback" component={LoginCallback} />
          <SecureRoute path="/" />
        </Switch>
      </Security>
    </Router>
  );
};
*/
