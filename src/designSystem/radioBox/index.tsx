import React, { useState } from 'react'
import DS from 'designSystem'
import DIMENS from 'sdk/values/dimens'

interface IRadioBox {
  type?: string
  value?: string
  label?: string
  readOnly?: boolean
  error?: boolean
  helperText?: string
  InputLabelProps?: any
  control: any
  onChange?: (value: string) => void
}

const RadioBox: React.FC<IRadioBox> = props => {
  const styles = {
    paddingBottom: `${DIMENS.fieldSpacing}px`
  }

  const [etValue, setEtValue] = useState(props.value || null)

  const onValueChange = (e: string) => {
    if (props.onChange) props.onChange(e)
    setEtValue(e)
  }

  return (
    <DS.FormControlLabel
      label={props.label}
      value={etValue}
      control={props.control}
    />

  )
}

export default RadioBox