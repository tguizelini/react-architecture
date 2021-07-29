import React from 'react'
import COLORS from 'sdk/values/colors'
import DS from 'designSystem'
import TimelineItemValue from './value'
import iconMoney from './assets/timeline-money.png'

export interface ITimelineItem {
  title?: string
  subTitle?: string
  value?: string | null
  isNegative?: boolean
}

const TimelineItem: React.FC<ITimelineItem> = props => {
  return (
    <DS.ContainerFlex row center>
      <img src={iconMoney} style={styles.icon} />

      <DS.ContainerFlex marginLeft={8} flex={6}>
        <DS.Typography style={styles.title}>
          {props.title || 'Titulo'}
        </DS.Typography>

        <DS.Typography style={styles.subTitle}>
          {props.subTitle || 'SubTitulo'}
        </DS.Typography>
      </DS.ContainerFlex>

      <TimelineItemValue />

    </DS.ContainerFlex>
  )
}

const styles = {
  icon: {
    height: '35px'
  },
  title: {
    fontSize: '16px',
    color: COLORS.title
  },
  subTitle: {
    fontSize: '12px',
    color: COLORS.subTitle
  }
}

export default TimelineItem