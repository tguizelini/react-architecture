import React, { useState, useEffect } from 'react'
import DS from '..'
import DIMENS from 'sdk/values/dimens'

interface IEditText {
  type?: string
  value?: string
  label?: string
  readOnly?: boolean
  error?: boolean
  helperText?: string
  InputLabelProps?: any
  maxLength?: number
  fullWidth?: boolean
  onChange?: (value: string) => void
}

const EditText: React.FC<IEditText> = props => {
  const styles = {
    paddingBottom: `${DIMENS.fieldSpacing}px`,
    width: props.fullWidth ? `100%` : 'auto'
  }

  const [etValue, setEtValue] = useState(props.value || null)

  const onValueChange = (e: string) => {
    if (props.onChange) props.onChange(e)
    setEtValue(e)
  }

  useEffect(() => {
    setEtValue(props.value || null)
  }, [props.value])

  return (
    <DS.TextField
      style={styles}
      error={props.error}
      variant="standard"
      label={props.label}
      value={etValue}

      onChange={e => {
        onValueChange(e.target.value)
      }}
      type={props.type || 'text'}
      defaultValue={etValue}
      helperText={props.helperText}
      InputLabelProps={props.InputLabelProps}
      inputProps={{
        readOnly: props.readOnly,
        maxLength: props.maxLength || 999999999999
      }}
    />
  )
}

export default EditText
