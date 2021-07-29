import React, { useState } from 'react'
import DS from '..'
import DIMENS from 'sdk/values/dimens'
import './styles.css'

interface ICardView {
  padding?: number
  elevation?: number
  width?: number
  widthInPixel?: number
  height?: number
  heightInPixel?: number
  responsiveWidth?: boolean
}

const CardView: React.FC<ICardView> = props => {
  const styles = {
    padding: props.padding ? `${props.padding}px` : '0px',
    width: props.widthInPixel ?
      `${props.widthInPixel}px`
      : props.width ? `${props.width}%` : 'auto',
    height: props.heightInPixel ?
      `${props.heightInPixel}px`
      : props.height ? `${props.height}%` : 'auto',
    borderRadius: DIMENS.borderRadius
  }

  return (
    <DS.Card className={props.responsiveWidth ? "cvContainerResponsive" : ""} elevation={props.elevation || DIMENS.elevation} style={styles}>
      {props.children}
    </DS.Card>
  )
}

export default CardView