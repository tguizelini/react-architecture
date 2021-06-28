import React from 'react'
import DS from '../../../../design-system'

interface IBlankListParams {
    list?: []
}

const BlankList: React.FC<IBlankListParams> = ({ list }) => {
    return <DS.Container>List of users</DS.Container>
}

export default BlankList