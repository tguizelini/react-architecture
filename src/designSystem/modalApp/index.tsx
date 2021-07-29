import React, { useEffect, useState } from 'react'
import DS from "designSystem"
import DIMENS from "sdk/values/dimens"

interface IModalApp {
  message?: string
  open: boolean
  onClose: () => void
}

const ModalApp: React.FC<IModalApp> = props => {
  const [show, setShow] = useState(props.open)

  useEffect(() => {
    setShow(props.open)
  }, [props.open])

  const handleClose = () => {
    props.onClose()
    setShow(false)
  }

  return (
    <DS.Modal
      open={show}
      onClose={handleClose}
    >
      <DS.ContainerFlex center horizontal style={styles.containerMain}>
        <DS.CardView padding={DIMENS.padding} widthInPixel={500}>
          <DS.ContainerFlex center horizontal >
            <DS.Logo sizeInPixel={40} />

            <DS.SpacingField />
            <DS.SpacingField />

            <DS.Typography variant="h3">{props.message ? props.message : "Feedback message"}</DS.Typography>

            <DS.SpacingField />
            <DS.SpacingField />

          </DS.ContainerFlex>

          <DS.Button fullWidth onClick={handleClose}>OK</DS.Button>
        </DS.CardView>
      </DS.ContainerFlex>
    </DS.Modal >
  )
}

const styles = {
  containerMain: {
    marginTop: '22%'
  }
}

export default ModalApp