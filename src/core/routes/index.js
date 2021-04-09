import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import AuthModule from "../../modules/auth";
import ProfileModule from "../../modules/profile";

/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */
// Add novos módulos aqui // 
const AppModules = [
  AuthModule,
  ProfileModule
]
/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */

const isAuthenticated = false

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? 
      <Component {...props} />
    :
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            {
              AppModules.map(module => module.routes.map(route => 
                route.private ?
                  <PrivateRoute exact path={route.path} component={route.component} />
                :
                  <Route exact path={route.path} component={route.component} />
              ))
            }
          </Switch>
        </BrowserRouter>
    )
}

export default Routes
