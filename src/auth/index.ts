//routes
import IModuleRoutes from 'sdk/routes/module.route.interface';

import Login from './src/ui/login';

const AuthModule: IModuleRoutes = {
    name: 'Auth Module',
    routes: [
        {
            path: '/',
            private: false,
            component: Login
        },
    ]
}

export default AuthModule