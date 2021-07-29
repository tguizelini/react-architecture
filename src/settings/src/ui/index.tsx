import React from 'react'
import { useHistory } from 'react-router-dom'
import DS from 'designSystem'
import SettingsModule from 'settings'

import iconDefault from '../../assets/icons/dados-da-conta.png'

const Settings = () => {
  const history = useHistory()

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
          onClick={() => history.push("/settings/pagina-2")}
        />

        <DS.BoxItem
          label="Page 3"
          icon={iconDefault}
          onClick={() => history.push("/settings/pagina-3")}
        />

      </DS.ContainerFlex>

    </DS.Layout>
  )
}

export default Settings