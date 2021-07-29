import React from 'react'
import { useHistory } from 'react-router-dom'

import DS from 'designSystem'
import COLORS from 'sdk/values/colors'
import DIMENS from 'sdk/values/dimens'
import DrawerItem from './item'

import './styles.css'

import iconHome from './assets/home.png'
import iconHomeActive from './assets/home-active.png'

export const DrawerAppSelect = {
  DASHBOARD: 1,
  CONFIGURACOES: 9
}

interface IDrawerApp {
  itemActive?: number
}

const DrawerApp: React.FC<IDrawerApp> = props => {
  const history = useHistory()

  const handleLogout = () => {
    history.push("/")
  }

  return (
    <div className="container">
      <DS.CardView>
        <DS.SpacingField bottom={DIMENS.fieldSpacing} />

        <DS.ContainerFlex center horizontal>
          <DS.Logo sizeInPixel={50} />
        </DS.ContainerFlex>

        <DS.SpacingField bottom={DIMENS.fieldSpacing} />

        {/* Drawer Items - begin */}
        <DS.ContainerFlex>
          <DrawerItem
            isActive={props.itemActive == DrawerAppSelect.DASHBOARD}
            icon={props.itemActive == DrawerAppSelect.DASHBOARD ? iconHomeActive : iconHome}
            label="Home"
            onClick={() => history.push("/dashboard")}
          />
        </DS.ContainerFlex>
        {/* Drawer Items - end */}

        <DS.SpacingField bottom={26} />

        <DS.ContainerFlex style={styles.containerItemBottom}>
          {/* item Configuraçoes - begin */}
          <DS.ContainerFlex
            center row
            style={styles.itemMenu.container}
            onClick={() => history.push('/settings')}
          >
            <DS.ICONS.Settings
              style={{
                ...styles.itemMenu.icons.iconConfig,
                color: props.itemActive == DrawerAppSelect.CONFIGURACOES ? COLORS.primary.color : 'black'
              }}
            />

            <DS.SpacingField left={8} />

            <DS.Typography
              variant="h3"
              color={props.itemActive == DrawerAppSelect.CONFIGURACOES ? 'primary' : 'textPrimary'}
            >Settings</DS.Typography>
          </DS.ContainerFlex>
          {/* item Configuraçoes - end */}

          <DS.SpacingField bottom={20} />

          {/* item sair - begin */}
          <DS.ContainerFlex
            center row
            style={styles.itemMenu.container}
            onClick={handleLogout}
          >
            <DS.ICONS.ExitToApp style={styles.itemMenu.icons.iconExit} />
            <DS.SpacingField left={8} />
            <DS.Typography variant="h3" style={styles.itemMenu.colors.exit}>Exit</DS.Typography>
          </DS.ContainerFlex>
          {/* item sair - end */}

        </DS.ContainerFlex>

        <DS.SpacingField />

      </DS.CardView>
    </div>
  )
}

const styles = {
  containerItemBottom: {
    paddingTop: 20,
    paddingLeft: 14
  },
  itemMenu: {
    icons: {
      iconConfig: {
        width: '32px'
      },
      iconExit: {
        width: '32px',
        color: COLORS.accent.color
      }
    },
    container: {
      cursor: 'pointer'
    },
    colors: {
      exit: {
        color: COLORS.accent.color
      }
    }
  }
}

export default {
  View: DrawerApp,
  Item: DrawerAppSelect
}