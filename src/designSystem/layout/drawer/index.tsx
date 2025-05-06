import React from 'react'
import { useNavigate } from 'react-router-dom'

import DS from 'designSystem'
import COLORS from 'core/values/colors'
import DIMENS from 'core/values/dimens'
import DrawerItem from './item'

import './styles.css'

import iconHome from './assets/home.png'
import iconHomeActive from './assets/home-active.png'

export const DrawerAppSelect = {
  DASHBOARD: 1,
  SETTINGS: 9
}

interface IDrawerApp {
  itemActive?: number
}

const DrawerApp: React.FC<IDrawerApp> = props => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className="container">
      <DS.CardView>
        <DS.SpacingField bottom={DIMENS.fieldSpacing} />

        <DS.ContainerFlex center horizontal>
          <DS.Logo sizeInPixel={50} />
        </DS.ContainerFlex>

        <DS.SpacingField bottom={32} />

        {/* Drawer Items - begin */}
        <DS.ContainerFlex>
          <DrawerItem
            isActive={props.itemActive == DrawerAppSelect.DASHBOARD}
            icon={props.itemActive == DrawerAppSelect.DASHBOARD ? iconHomeActive : iconHome}
            label="Home"
            onClick={() => navigate("/dashboard")}
          />

          <DrawerItem
            isActive={props.itemActive == DrawerAppSelect.SETTINGS}
            iconMaterial={
              props.itemActive == DrawerAppSelect.SETTINGS ?
                <DS.ICONS.Settings style={styles.itemMenu.icons.iconMaterialActive} />
                :
                <DS.ICONS.Settings style={styles.itemMenu.icons.iconMaterialInactive} />
            }
            label="Settings"
            onClick={() => navigate("/settings")}
          />
        </DS.ContainerFlex>
        {/* Drawer Items - end */}

        <DS.SpacingField bottom={14} />

        <DS.ContainerFlex style={styles.containerItemBottom}>
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
      iconMaterialActive: {
        color: COLORS.primary.color,
        width: '32px',
        marginRight: '8px',
        marginLeft: '6px'
      },
      iconMaterialInactive: {
        color: COLORS.disabled.color,
        width: '32px',
        marginRight: '8px',
        marginLeft: '6px'
      },
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