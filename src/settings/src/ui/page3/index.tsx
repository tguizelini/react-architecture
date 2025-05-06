import React from 'react'
import { useNavigate } from 'react-router-dom'
import DS from 'designSystem'
import SettingsModule from 'settings'

const SettingsPage3 = () => {
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate("/settings")
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