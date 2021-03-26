//routes
import Login from './src/ui/login';
import PasswordRecovery from './src/ui/passwordRecovery';

const AuthModule = {
    name: 'auth',
    routes: [
        {
            path: '/',
            private: false,
            component: Login
        },
        {
            path: '/recuperar-senha',
            private: false,
            component: PasswordRecovery
        }
    ]
}

export default AuthModule