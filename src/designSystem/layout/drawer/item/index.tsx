import React from 'react'
import DS from 'designSystem'
import COLORS from 'core/values/colors'
import DIMENS from 'core/values/dimens'

interface IDrawerItem {
  icon?: any
  iconMaterial?: any
  label?: string
  onClick?: () => void
  isActive?: boolean
  hideArrow?: boolean
}

const DrawerItem: React.FC<IDrawerItem> = props => {

  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  const getArrowStyle = () => {
    const style = props.isActive ? { ...styles.active } : { ...styles.inactive }
    return {
      ...styles.iconArrow,
      ...style
    }
  }

  return (
    <DS.ContainerFlex
      center
      space row
      heightInPixel={55}
      width={100}
      onClick={handleClick}
      style={styles.container}
    >

      <DS.ContainerFlex row center heightInPixel={55}>
        {!props.iconMaterial && (<img src={props.icon} style={styles.icon} />)}
        {props.iconMaterial && (props.iconMaterial)}

        <DS.Typography
          variant="h3"
          style={props.isActive ? styles.active : styles.inactive}
        >
          {props.label || 'Item'}
        </DS.Typography>
      </DS.ContainerFlex>

      {!props.hideArrow && (
        <DS.ICONS.ArrowForwardIos
          style={getArrowStyle()} />
      )}

    </DS.ContainerFlex>
  )
}

const styles = {
  container: {
    cursor: 'pointer',
    paddingLeft: 8,
  },
  icon: {
    width: '32px',
    marginRight: '8px',
    marginLeft: '6px'
  },
  iconArrow: {
    width: '14px',
    paddingRight: 21
  },
  active: {
    color: COLORS.primary.color
  },
  inactive: {
    color: COLORS.disabled.color
  }
}

export default DrawerItem