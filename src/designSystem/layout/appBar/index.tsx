import React from 'react'
import DS from '../..'
import COLORS from 'core/values/colors'
import DIMENS from 'core/values/dimens'
import './styles.css'

interface IAppBarApp {
  pageTitle?: string
  pagePath?: string
}

const AppBarApp: React.FC<IAppBarApp> = props => {
  return (
    <div id="appbar" style={styles.mainContainer}>
      <DS.ContainerFlex space id="appBarContent">

        <DS.Typography variant='h1' style={styles.textColor}>
          {props.pageTitle}
        </DS.Typography>

        <DS.SpacingField bottom={6} />

        <DS.Typography variant='h3' style={styles.textColor}>
          {props.pagePath}
        </DS.Typography>

      </DS.ContainerFlex>
    </div>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: COLORS.backgroundApp,
    borderTop: '1px solid ' + COLORS.toolbar.divider,
    paddingLeft: DIMENS.padding + "px",
    paddingTop: "25px"
  },
  textColor: {
    color: COLORS.white
  }
}

export default AppBarApp