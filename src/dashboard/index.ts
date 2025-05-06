//routes
import IModuleRoutes from "core/routes/module.route.interface"
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