import React from 'react'
import DS from 'designSystem'
import iconTransaction from 'sdk/assets/icons/arrow-transaction.png'
import DIMENS from 'sdk/values/dimens'

interface IBoxItem {
  icon?: any
  onClick?: () => void
  label?: string
  space?: boolean
}

const BoxItem: React.FC<IBoxItem> = props => {
  const handleClick = () => {
    if (props.onClick) props.onClick()
  }

  const getContainerStyles = () => {
    let finalSty = {}

    const sty = {
      ...styles.container
    }

    if (props.space) {
      finalSty = {
        ...sty,
        marginRight: '30px'
      }
    } else {
      finalSty = sty
    }

    return finalSty
  }

  return (
    <div style={getContainerStyles()} onClick={handleClick}>
      <DS.CardView height={100} width={100}>

        <DS.ContainerFlex center horizontal height={100} width={100}>

          <img src={props.icon || iconTransaction} style={styles.icon} />

          <DS.SpacingField />

          <DS.Typography variant="h3" align="center" >{props.label || "Nome"}</DS.Typography>

        </DS.ContainerFlex>

      </DS.CardView>
    </div>
  )
}

const styles = {
  container: {
    cursor: 'pointer',
    width: '140px',
    height: '130px',
    padding: '6px'
  },
  icon: {
    height: '40px'
  }
}

export default BoxItem