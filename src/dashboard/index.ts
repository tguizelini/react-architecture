//routes
import IModuleRoutes from "sdk/routes/module.route.interface"
import Dashboard from "./src/ui/dashboard"

const DashboardModule: IModuleRoutes = {
    name: 'Dashboard',
    routes: [
        {
            path: '/dashboard',
            private: false,
            component: Dashboard
        }
    ]
}

export default DashboardModule