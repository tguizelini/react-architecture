import React from 'react'

import * as St from './styles'

interface IProfileListParams {
    list?: []
}

const ProfileList: React.FC<IProfileListParams> = ({ list }) => {
    return <St.MyOwnContainer2>List of users</St.MyOwnContainer2>
}

export default ProfileList