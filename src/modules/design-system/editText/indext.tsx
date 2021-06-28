import React, { useState } from 'react'
import DS from '..'

interface IEditText {
  type?: string
  value?: string
  label?: string
  readOnly?: boolean
  error?: boolean
  helperText?: string
  onChange?: (string) => null
}

const EditText: React.FC<IEditText> = props => {
  const [etValue, setEtValue] = useState(props.value || null)

  const onValueChange = (e) => {
    const eValue = e.target.value

    if (props.onChange) props.onChange(eValue)

    setEtValue(eValue)
  }


  return (
    <>
      <DS.TextField
        error={props.error}
        variant="outlined"
        label={props.label}
        value={etValue}
        onChange={onValueChange}
        type={props.type || 'text'}
        defaultValue={etValue}
        helperText={props.helperText}
        InputProps={{
          readOnly: props.readOnly,
        }}
      />
      <br />
    </>
  )
}

export default EditText