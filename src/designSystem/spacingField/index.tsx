import React from 'react'
import DIMENS from 'sdk/values/dimens'

interface ISpacingField {
  bottom?: number
  left?: number
  right?: number
  top?: number
}

const SpacingField: React.FC<ISpacingField> = props => {
  const stylesParams = {
    paddingLeft: props.left ? `${props.left}px` : `0px`,
    paddingRight: props.right ? `${props.right}px` : `0px`,
    paddingTop: props.top ? `${props.top}px` : `0px`,
    marginBottom: props.bottom ? `${props.bottom}px` : `0px`
  }

  let styles = {}

  if (!props.bottom && !props.left && !props.right && !props.top) {
    styles = {
      marginBottom: props.bottom ? `${props.bottom}px` : `${DIMENS.fieldSpacing}px`
    }
  } else {
    styles = stylesParams
  }

  return <div style={styles} />
}

export default SpacingField
