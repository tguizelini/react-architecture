import React from 'react'
import { useNavigate } from 'react-router-dom'
import DS from 'designSystem'
import SettingsModule from 'settings'

import iconDefault from '../../assets/icons/dados-da-conta.png'

const Settings = () => {
  const navigate = useNavigate()

  return (
    <DS.Layout
      pageTitle={SettingsModule.name}
      pagePath=" > Page 1"
      menuActive={DS.DrawerAppItem.SETTINGS}
    >

      <DS.ContainerFlex row>

        <DS.BoxItem
          label="Page 2"
          icon={iconDefault}
          onClick={() => navigate("/settings/page-2")}
        />

        <DS.BoxItem
          label="Page 3"
          icon={iconDefault}
          onClick={() => navigate("/settings/page-3")}
        />

      </DS.ContainerFlex>

    </DS.Layout>
  )
}

export default Settings