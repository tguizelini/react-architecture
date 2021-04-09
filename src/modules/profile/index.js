//routes
import ProposalForm from "./src/ui/detail"
import ProposalList from "./src/ui/list"

const ProfileModule = {
    name: 'Profile',
    routes: [
        {
            path: '/profile',
            private: false,
            component: ProposalList
        },
        {
            path: '/profile/defailt',
            private: false,
            component: ProposalForm
        }
    ]
}

export default ProposalModule