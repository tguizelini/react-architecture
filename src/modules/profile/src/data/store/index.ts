export const ProposalActionTypes = {
    LIST: "PROPOSAL_LIST"
}

interface IProposalStore {
    proposalList?: any[]
}

const INITIAL_VALUE: IProposalStore = {
    proposalList: []
}

const ProposalReducer = (state = INITIAL_VALUE, action) => {
    switch(action.type) {
        case ProposalActionTypes.LIST:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state
    }
}

export default ProposalReducer
