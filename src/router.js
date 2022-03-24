import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'config/routes';
import * as path from 'config/path';
import { checkLogin } from 'src/helper';
import Layout from 'components/Layout';

const Login = React.lazy(() => import('pages/Login'));
// const Single = React.lazy(() => import('pages/Single'));
const ForgotPassword = React.lazy(() => import('pages/ForgotPassword'));

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const PrivateRoute = (route) => {
  let loggedIn = checkLogin();

  return loggedIn ? (
    <Layout {...route}>
      <RouteWithSubRoutes {...route} />
    </Layout>
  ) : (
    <Redirect
      to={{
        pathname: path.LOGIN,
        state: { from: route.path }
      }}/>
  );
};

export default (
  <Switch>
    <Route path={path.LOGIN} component={Login} />
    {/* <Route path={path.SINGLE} component={Single} /> */}
    <Route path={path.FORGOT_PASSWORD} component={ForgotPassword} />
    {routes.map( (route, i) => (
      <PrivateRoute key={i} {...route} />
    ))}
  </Switch>
);
