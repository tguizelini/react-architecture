import React from 'react'
import { useHistory } from 'react-router-dom'
import DS from 'designSystem'
import SettingsModule from 'settings'

const SettingsPage3 = () => {
  const history = useHistory()

  const handleBackButton = () => {
    history.push("/settings")
  }

  return (
    <DS.Layout
      pageTitle={SettingsModule.name}
      menuActive={DS.DrawerAppItem.SETTINGS}
      pagePath=" > Page 3"
    >

      <DS.ContainerFlex>

        <DS.Button variant="outlined" onClick={handleBackButton}>Go back</DS.Button>

      </DS.ContainerFlex>

    </DS.Layout>
  )
}

export default SettingsPage3