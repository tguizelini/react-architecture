import React, { useState } from 'react'
import DS from 'designSystem'
import COLORS from 'core/values/colors'
import DIMENS from 'core/values/dimens'
import DrawerApp from './drawer'
import ToolbarApp from './toolbar'
import './styles.css'

interface ILayout {
  menuActive?: number
  pageTitle?: string
  pagePath?: string
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = props => {
  const [canDrawerOpen, setCanDrawerOpen] = useState(false)

  const toggleDrawer = () => setCanDrawerOpen(!canDrawerOpen)

  const drawerStyle = "layoutAbsolute drawer " + (canDrawerOpen ? ' drawer-active ' : '')

  return (
    <div style={styles.mainContainer}>
      {/* Toolbar + AppBar */}
      <ToolbarApp
        pageTitle={props.pageTitle}
        pagePath={props.pagePath}
        isDrawerOpen={canDrawerOpen}
        onToggleDrawerClick={toggleDrawer}
      />

      <DS.ContainerFlex row>

        {/* DRAWER */}
        <div className={drawerStyle}>
          <div style={styles.drawerContainer}>
            <DrawerApp.View itemActive={props.menuActive} />
          </div>
        </div>

        {/* CONTENT */}
        <DS.ContainerFlex className="layoutAbsolute" flex={3}>
          <div style={styles.contentContainer}>
            {props.children}
          </div>
        </DS.ContainerFlex>

      </DS.ContainerFlex>

    </div>
  )
}

const styles = {
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.background
  },
  contentContainer: {
    marginTop: '105px', // por causa da AppBar
    height: '100vh',
    maxWidth: '100%',
    padding: DIMENS.padding
  },
  drawerContainer: {
    marginTop: '-26px',
    marginLeft: DIMENS.padding,
    marginRight: DIMENS.padding
  }
}

export default Layout