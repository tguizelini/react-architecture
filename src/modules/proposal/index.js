//routes
import ProposalForm from "./src/ui/form"
import ProposalList from "./src/ui/list"

const ProposalModule = {
    name: 'Proposta',
    routes: [
        {
            path: '/proposal',
            private: false,
            component: ProposalList
        },
        {
            path: '/proposal/form',
            private: false,
            component: ProposalForm
        }
    ]
}

export default ProposalModule