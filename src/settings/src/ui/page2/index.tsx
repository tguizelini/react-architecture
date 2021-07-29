import React from 'react'
import { useHistory } from 'react-router-dom'
import DS from 'designSystem'
import SettingsModule from 'settings'

const SettingsPage2 = () => {
  const history = useHistory()

  const handleBackButton = () => {
    history.push("/settings")
  }

  return (
    <DS.Layout
      pageTitle={SettingsModule.name}
      menuActive={DS.DrawerAppItem.SETTINGS}
      pagePath=" > Page 2"
    >

      <DS.ContainerFlex>

        <DS.Button variant="contained" onClick={handleBackButton}>Go back</DS.Button>

      </DS.ContainerFlex>

    </DS.Layout>
  )
}

export default SettingsPage2