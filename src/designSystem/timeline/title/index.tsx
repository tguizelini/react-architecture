import React from 'react'
import DS from '../..'

interface TimelineItemTitle {
  value?: string
}

const TimelineItemTitle: React.FC<TimelineItemTitle> = props => {
  return (
    <DS.Typography variant="subtitle1" color="textSecondary">
      {props.value || "Hoje"}
    </DS.Typography>
  )
}

export default TimelineItemTitle