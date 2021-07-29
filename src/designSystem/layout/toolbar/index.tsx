import React, { useEffect, useState } from 'react'
import DS from '../..'
import StorageHelper from 'sdk/data/storage/storage.helper'
import AppKeys from 'sdk/data/storage/storageKeys'
import COLORS from 'sdk/values/colors'
import DIMENS from 'sdk/values/dimens'
import AppBarApp from '../appBar'

import './styles.css'

interface IToolbarApp {
  pageTitle?: string
  pagePath?: string
  isDrawerOpen?: boolean
  onToggleDrawerClick?: () => void
}

const ToolbarApp: React.FC<IToolbarApp> = props => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const userNameResponse = await StorageHelper.get(AppKeys.USER_NAME)
    setUserName(userNameResponse)
  }

  const handleToggleDrawer = () => {
    if (props.onToggleDrawerClick) props.onToggleDrawerClick()
  }

  return (
    <>
      <div style={styles.mainContainer}>
        <DS.ContainerFlex row space height={100}>

          {!props.isDrawerOpen && <DS.ICONS.Menu
            id="toolbarIconDrawer"
            style={styles.drawerIcon}
            onClick={handleToggleDrawer}
          />}

          {props.isDrawerOpen && <DS.ICONS.Close
            id="toolbarIconDrawer"
            style={styles.drawerIcon}
            onClick={handleToggleDrawer}
          />}

          <DS.ContainerFlex row center flex={3} style={styles.containerBlock} id="toolbarContainerInfos">
            <DS.ContainerFlex center end flex={2}>
              <DS.Typography style={styles.toolbarMenuInfo}>Olá,</DS.Typography>
              <DS.Typography style={styles.toolbarMenuInfoName}>{userName || "Tiago Guizelini"}</DS.Typography>
            </DS.ContainerFlex>

          </DS.ContainerFlex>

          <DS.ICONS.NotificationsOutlined style={styles.notification} />
        </DS.ContainerFlex>
      </div>

      <AppBarApp
        pageTitle={props.pageTitle || 'Nome Modulo'}
        pagePath={(props.pageTitle || "Nome Modulo ") + (props.pagePath || ' > Pagina 1')}
      />
    </>
  )
}

const styles = {
  mainContainer: {
    height: '60px',
    maxWidth: '100%',
    backgroundColor: COLORS.backgroundApp
  },
  containerBlock: {
    borderLeft: '1px solid ' + COLORS.toolbar.divider,
    borderRight: '1px solid ' + COLORS.toolbar.divider,
    paddingRight: DIMENS.padding,
    paddingLeft: DIMENS.padding
  },
  containerDropDown: {
    borderLeft: '1px solid ' + COLORS.toolbar.divider,
    borderRight: '1px solid ' + COLORS.toolbar.divider,
    paddingRight: DIMENS.padding,
    paddingLeft: DIMENS.padding,
    cursor: 'pointer'
  },
  toolbarDropDownArrow: {
    paddingLeft: '18px',
    fontSize: '30px',
    color: COLORS.white
  },
  toolbarMenuDropDownTitle: {
    fontSize: '18px',
    color: COLORS.white,
  },
  toolbarMenuDropDownSubTitle: {
    fontSize: '14px',
    color: COLORS.white,
    backgroundColor: COLORS.title,
    paddingLeft: '16px',
    paddingRight: '16px',
    marginTop: '2px',
    borderRadius: DIMENS.borderRadius
  },
  toolbarMenuInfo: {
    fontSize: '12px',
    color: COLORS.white
  },
  toolbarMenuInfoName: {
    fontSize: DIMENS.text.subTitle,
    color: COLORS.white
  },
  drawerIcon: {
    fontSize: 35,
    marginTop: '12px',
    marginLeft: DIMENS.padding,
    marginRight: DIMENS.padding,
    color: COLORS.white,
    cursor: 'pointer'
  },
  notification: {
    fontSize: 35,
    marginTop: '12px',
    marginLeft: DIMENS.padding,
    marginRight: DIMENS.padding,
    color: COLORS.white,
    cursor: 'pointer'
  }
}

export default ToolbarApp