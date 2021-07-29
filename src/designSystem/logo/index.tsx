import React from 'react'
import logoApp from "sdk/assets/logo.png"

interface ILogo {
  size?: number,
  sizeInPixel?: number
}

const Logo: React.FC<ILogo> = props => {
  const styles = {
    height: props.sizeInPixel ? `${props.sizeInPixel}px`
      : props.size ? `${props.size}%` : '90%'
  }

  return (
    <img src={logoApp} style={styles} />
  )
}

export default Logo