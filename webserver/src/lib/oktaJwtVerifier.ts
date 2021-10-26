import OktaJwtVerifier from '@okta/jwt-verifier';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const OKTA_DOMAIN = process.env.OKTA_DOMAIN;
const AUTH_SERVER_ID = process.env.AUTH_SERVER_ID;
console.log(OKTA_DOMAIN)
export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${OKTA_DOMAIN}/oauth2/${AUTH_SERVER_ID}`, // required
});
