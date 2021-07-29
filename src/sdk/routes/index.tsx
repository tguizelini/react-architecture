import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"

import AuthModule from "auth"
import DashboardModule from "dashboard"
import SettingsModule from "settings"
import BlankModule from "_blankModule"

/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */
// Add novos módulos aqui // 
// Add new modules here 
const AppModules = [
  BlankModule,
  AuthModule,
  DashboardModule,
  SettingsModule,
]
/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */
// observe authenticated status  - UNDER CONSTRUCTION
const isAuthenticated = false

interface IPrivateRoute {
  component: any
  exact: boolean
  path: string
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ component: Component, ...rest }) => (
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
