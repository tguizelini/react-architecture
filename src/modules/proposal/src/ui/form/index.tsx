import React from 'react'

import * as St from './styles'

interface IProposalParams {
    idProposal?: number
}

const ProposalForm: React.FC<IProposalParams> = ({ idProposal }) => {
    return <St.MyOwnContainer>idProposal: {idProposal}</St.MyOwnContainer>
}

export default ProposalForm