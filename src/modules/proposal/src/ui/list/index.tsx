import React from 'react'

import * as St from './styles'

interface IProposalParams {
    list?: []
}

const ProposalList: React.FC<IProposalParams> = ({ list }) => {
    return <St.MyOwnContainer2>List of proposal</St.MyOwnContainer2>
}

export default ProposalList