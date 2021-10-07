import { oktaJwtVerifier } from './oktaJwtVerifier';

export const oktaAuthRequired = (req: any, res: any, next: any) => {
  console.log(req.headers.authorization);
  
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401);
    return next('Unauthorized');
  }

  const accessToken = match[1];
  console.log('accessToken');
  console.log(accessToken);

  const audience = 'api://default';
  return (
    oktaJwtVerifier
      .verifyAccessToken(accessToken, audience)
      // eslint-disable-next-line promise/always-return
      .then((jwt: any) => {
        console.log('jwt');
        console.log(jwt);
        req.jwt = jwt;
        // eslint-disable-next-line promise/no-callback-in-promise
        next();
      })
      .catch((err: any) => {
        console.log('err');
        console.log(err.message);
        res.status(401).send(err.message);
      })
  );
};
