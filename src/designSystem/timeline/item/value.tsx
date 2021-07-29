import React from 'react'
import COLORS from 'sdk/values/colors'
import DS from 'designSystem'

interface ITimelineItemValue {
  value?: string
  cents?: string
}

const TimelineItemValue: React.FC<ITimelineItemValue> = props => {
  return (

    <DS.ContainerFlex row center>
      <div style={styles.cifraoContent}>
        <DS.Typography color='secondary' style={styles.valueStyleCif}>R$</DS.Typography>
      </div>
      <DS.ContainerFlex row space center>
        <DS.ContainerFlex row >
          <DS.Typography color='secondary' style={styles.valueStyle}>
            {props.value || '2.850'}
          </DS.Typography>

          <DS.ContainerFlex row marginLeft={2} height={100} >
            <DS.Typography color='secondary' style={styles.valueCentsStyle}>
              {props.cents || '00'}
            </DS.Typography>
          </DS.ContainerFlex>

        </DS.ContainerFlex>
      </DS.ContainerFlex>

    </DS.ContainerFlex>
  )
}

const styles = {
  valueStyleCif: {
    fontSize: '10px',
    color: COLORS.title,
    marginBottom: '5px'
  },
  valueStyle: {
    fontSize: '18px',
    color: COLORS.title
  },
  valueCentsStyle: {
    color: COLORS.title,
    fontSize: '10px',
    marginTop: '2px'
  },
  cifraoContent: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '17px',
    height: '30px',
  }
}

export default TimelineItemValue