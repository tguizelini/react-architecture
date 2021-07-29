import React, { useEffect, useState } from 'react'
import DS from '..'
import TimelineItem, { ITimelineItem } from './item'

import * as ST from './styles'
import TimelineItemTitle from './title'

export interface TimelineItemModel {
  description?: string
  data?: ITimelineItem[]
}

interface ITimeline {
  data?: TimelineItemModel[]
}

const Timeline: React.FC<ITimeline> = props => {
  const [data, setData] = useState<TimelineItemModel[]>(props.data || [])

  useEffect(() => {
    if (props.data) setData(props.data)
  }, [props.data])

  return (
    <DS.ContainerFlex>
      {data && data.map((i, index) => {
        return (
          <>
            <TimelineItemTitle value={i.description} />

            {i.data && i.data.map(it => (
              <>
                <ST.Divider />

                <TimelineItem
                  title={it.title}
                  subTitle={it.subTitle}
                  value={it.value}
                  isNegative={it.isNegative}
                />
              </>
            ))}

            {index < (data.length - 1) && (
              <ST.Divider />
            )}

          </>
        )
      })}

    </DS.ContainerFlex>
  )
}

export default Timeline