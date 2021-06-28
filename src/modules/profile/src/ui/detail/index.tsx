import React from 'react'
import DS from '../../../../design-system'

interface IProfileDetailParams {
    idProfile?: number
}

const ProfileDetail: React.FC<IProfileDetailParams> = ({ idProfile }) => {
    return <DS.Container>idProfile: {idProfile}</DS.Container>
}

export default ProfileDetail