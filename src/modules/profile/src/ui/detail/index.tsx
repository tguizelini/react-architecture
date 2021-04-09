import React from 'react'

import * as St from './styles'

interface IProfileDetailParams {
    idProfile?: number
}

const ProfileDetail: React.FC<IProfileDetailParams> = ({ idProfile }) => {
    return <St.MyOwnContainer>idProfile: {idProfile}</St.MyOwnContainer>
}

export default ProfileDetail