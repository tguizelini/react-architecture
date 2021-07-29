//routes
import IModuleRoutes from "sdk/routes/module.route.interface"
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