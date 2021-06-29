import React, { useState } from 'react'
import DS from '..'
import DIMENS from '../../../core/values/dimens'

interface ICardView {
  padding?: number
  elevation?: number
  width?: number
  height?: number
}

const CardView: React.FC<ICardView> = props => {
  const styles = {
    padding: props.padding ? `${props.padding}px` : '0px',
    width: props.width ? `${props.width}%` : 'auto',
    height: props.height ? `${props.height}%` : 'auto'
  }

  return (
    <DS.Card elevation={props.elevation || DIMENS.elevation} style={styles}>
      {props.children}
    </DS.Card>
  )
}

export default CardView