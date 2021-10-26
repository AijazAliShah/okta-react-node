const REACT_APP_CLIENT_ID = '0oa12aakvnmP9mV970h8';
const REACT_APP_OKTA_DOMAIN = 'viewglass.oktapreview.com';
const REACT_APP_CLIENT_ID1 = '0oa254gdkgisvo2zF5d7';
const REACT_APP_OKTA_DOMAIN1 = 'dev-2313318.okta.com';
const REACT_APP_PORT = process.env.REACT_APP_PORT;

export const oktaConfig = {
  clientId: REACT_APP_CLIENT_ID1,
  issuer: `https://${REACT_APP_OKTA_DOMAIN1}/oauth2/default`,
  redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`, // this makes it so redirects to login if not logged in for secure routes
  // responseMode: 'fragment',
  // tokenManager: {storage: 'sessionStorage'},
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
