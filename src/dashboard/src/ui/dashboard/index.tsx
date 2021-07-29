import React from 'react'
import DS from 'designSystem'
import DashboardModule from 'dashboard'
import { useHistory } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const history = useHistory()

  return (
    <DS.Layout
      menuActive={DS.DrawerAppItem.DASHBOARD}
      pageTitle={DashboardModule.name}
      pagePath=" > Home"
    >

      <DS.Button variant="contained" onClick={() => alert('Hello, world')}>Hello, world</DS.Button>

    </DS.Layout>
  )
}

export default Dashboard