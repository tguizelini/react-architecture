import React from 'react'
import { useHistory } from 'react-router-dom'
import DS from 'designSystem'
import BlankModule from '_blankModule'

const BlankHome: React.FC = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push("/dashboard")
    }

    return (
        <DS.Layout
            pageTitle={BlankModule.name}
            menuActive={DS.DrawerAppItem.DASHBOARD}
            pagePath=" > Home"
        >

            <DS.ContainerFlex>
                <DS.Button variant="outlined" onClick={handleClick}>Go to Dashboard</DS.Button>
            </DS.ContainerFlex>

        </DS.Layout>
    )
}

export default BlankHome