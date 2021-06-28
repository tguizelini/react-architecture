import React from 'react'
import DS from '../../../../design-system'

interface IBlankDetailParams {
    idProfile?: number
}

const BlankDetail: React.FC<IBlankDetailParams> = ({ idProfile }) => {
    return <DS.Container>idProfile: {idProfile}</DS.Container>
}

export default BlankDetail