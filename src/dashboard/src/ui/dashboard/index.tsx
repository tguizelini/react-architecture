import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'sdk/data/store/reducers'
import DashboardModule from 'dashboard'

import DS from 'designSystem'
import DIMENS from 'sdk/values/dimens'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const state = useSelector((state: RootState) => state.user)

  const handleNavigateToSettings = () => {
    history.push("/settings")
  }

  return (
    <DS.Layout
      menuActive={DS.DrawerAppItem.DASHBOARD}
      pageTitle={DashboardModule.name}
      pagePath=" > Home"
    >
      <DS.ContainerFlex center>

        <DS.CardView padding={DIMENS.padding * 2}>
          <DS.Typography variant="h1">From Redux: {state.name}</DS.Typography>
        </DS.CardView>

        <DS.SpacingField bottom={DIMENS.fieldSpacing * 3} />

        <DS.Button variant="contained" onClick={handleNavigateToSettings}>Go to Settings</DS.Button>

      </DS.ContainerFlex>

    </DS.Layout>
  )
}

export default Dashboard