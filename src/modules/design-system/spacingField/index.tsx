import React from 'react'
import DIMENS from '../../../core/values/dimens'

interface ISpacingField {
  padding?: number;
}

const SpacingField: React.FC<ISpacingField> = props => {
  const styles = {
    paddingBottom: props.padding ? `${props.padding}px` : `${DIMENS.fieldSpacing}px`
  }

  return <div style={styles} />
}

export default SpacingField
