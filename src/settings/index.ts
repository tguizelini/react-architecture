//routes
import IModuleRoutes from "core/routes/module.route.interface"
import Settings from "./src/ui"
import SettingsPage2 from "./src/ui/page2"
import SettingsPage3 from "./src/ui/page3"

const SettingsModule: IModuleRoutes = {
    name: 'Settings',
    routes: [
        {
            path: '/settings',
            private: false,
            component: Settings
        },
        {
            path: '/settings/page-2',
            private: false,
            component: SettingsPage2
        },
        {
            path: '/settings/page-3',
            private: false,
            component: SettingsPage3
        }
    ]
}

export default SettingsModule