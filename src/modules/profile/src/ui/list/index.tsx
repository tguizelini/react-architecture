import React from 'react'
import { useHistory } from 'react-router-dom'
import DS from '../../../../design-system'

interface IProfileListParams {
    list?: []
}

const ProfileList: React.FC<IProfileListParams> = ({ list }) => {
    const history = useHistory()

    const goBack = () => history.goBack()

    return (
        <DS.Container>
            <DS.Typography variant="h1">List of users - H1</DS.Typography>
            <DS.Typography variant="h2">H2</DS.Typography>
            <DS.Typography variant="subtitle1">SubTitle</DS.Typography>
            <DS.Typography variant="body1">Body1</DS.Typography>
            <DS.Button variant="contained" onClick={goBack}>Voltar</DS.Button>
        </DS.Container>
    );
}

export default ProfileList