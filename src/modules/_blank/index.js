//routes
import BlankDetail from "./src/ui/detail"
import BlankList from "./src/ui/list"

const BlankModule = {
    name: 'Blank',
    routes: [
        {
            path: '/blank',
            private: false,
            component: BlankList
        },
        {
            path: '/blank/detail',
            private: false,
            component: BlankDetail
        }
    ]
}

export default BlankModule