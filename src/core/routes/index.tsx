import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

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

const PrivateRoute: React.FC<IPrivateRoute> = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}
      element={isAuthenticated ? 
        <Component {...rest} /> : 
        <Navigate to="/" state={{ from: location }} />
    } />
  )
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          AppModules.map(module => module.routes.map(route =>
            route.private ?
              <PrivateRoute exact path={route.path} component={route.component} />
              :
              <Route key={route.path} path={route.path} element={<route.component />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;