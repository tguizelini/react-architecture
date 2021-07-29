import React, { MutableRefObject, useState } from 'react'
import DS from 'designSystem'

interface IEditBox {
  refEl?: MutableRefObject<any>
  value?: string
  onChange?: (str: string) => void
  type?: string
}

const EditBox: React.FC<IEditBox> = props => {
  const [value, setValue] = useState(props.value || "")

  const onChangeValue = (e: any) => {
    const val = e.target.value

    if (props.onChange) props.onChange(val)

    setValue(val)
  }

  return (
    <div style={styles.container}>
      <DS.ContainerFlex center horizontal>
        <input
          ref={props.refEl}
          type={props.type || 'text'}
          style={styles.input}
          maxLength={1}
          value={value}
          onChange={onChangeValue}
        />
      </DS.ContainerFlex>
    </div>
  )
}

const styles = {
  container: {
    height: '76px',
    width: '70px',
    backgroundColor: '#ccd1d4',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    height: '26px',
    width: '15px',
    fontSize: '30px',
    alignText: 'center',
    outline: 'none',
    cursor: 'pointer'
  }
}

export default EditBox