import React from "react";
import { useOktaAuth } from "@okta/okta-react";
const REACT_APP_OKTA_DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });
  const yourOktaDomain = 'dev-2313318.okta.com';
  const clientId = '0oa254gdkgisvo2zF5d7';
  const responseType = 'token';
  const responseMode = 'fragment';
  const scopes = 'openid';
  const redirectUri = 'http://localhost:3000/login/callback';
  const nonce = 'YsG76jo';
  const state = 'state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601';
  const idp = '0oa2a943m2I8cIQVG5d7';


  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <div>
          <button onClick={login}>Login</button>
        </div>
        <div>
        
        <a href={`https://${yourOktaDomain}/oauth2/default/v1/authorize?idp=${idp}&client_id=${clientId}&response_type=${responseType}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}&nonce=${nonce}`}>
            Sign in with Google</a>
            {/* <a href={`https://dev-2313318.okta.com/oauth2/default/v1/authorize?client_id=0oa254gdkgisvo2zF5d7&code_challenge=QD5HYB62neU56DudFOlxfQGJ0MrBYyvqzHCqur9ipaE&code_challenge_method=S256&nonce=iZfBsf2BOLDkO3zajQTytqx9TxAj9y3A80FeTN3eZiAZurePgR7y11ZJlMbGdQpk&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback&response_type=code&state=Sszeox9iq1LM0O9qBi9D6FudRWKxCJeZY1K3GXw19sYlvKzk67OhYdETNZ87avID&scope=openid%20profile%20email`}>
            Sign in with Google</a> */}
          {/* <a href={`https://dev-2313318.okta.com/oauth2/v1/authorize?idp=${idp}&client_id=${clientId}&response_type=${responseType}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}&code_challenge_method=S256&code_challenge=qjrzSW9gMiUgpUvqgEPE4_-8swvyCtfOVvg55o5S_es`}>
            Sign in with Google</a> */}
        </div>
      </div>
    );
  } else {
    return "You authenticated!";
  }
};
export default Home;
