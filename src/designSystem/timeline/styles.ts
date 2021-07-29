import styled from 'styled-components'
import COLORS from 'sdk/values/colors'

export const Divider = styled.div`
  height: 20px;
  width: 1px;
  margin-left: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${COLORS.disabled.color};
`