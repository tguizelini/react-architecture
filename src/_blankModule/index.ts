//routes
import IModuleRoutes from "core/routes/module.route.interface"
import BlankHome from "./src/ui"

const BlankModule: IModuleRoutes = {
    name: 'Blank Module',
    routes: [
        {
            path: '/blank',
            private: false,
            component: BlankHome
        }
    ]
}

export default BlankModule