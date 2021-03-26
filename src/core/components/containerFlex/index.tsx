/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

type Positions = 'flex-start' | 'flex-end' | 'center' | 'space-between';

interface IContainerFlex {
  container?: boolean;
  height?: number;
  width?: number;
  center?: boolean;
  end?: boolean;
  align?: Positions;
  horizontal?: boolean;
  space?: boolean;
  spaceAround?: boolean;
  padding?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  row?: boolean;
  flex?: number;
  wrap?: boolean;
  color?: string;
}

const ContainerFlex = styled.div<IContainerFlex>`
  height: ${(p) => (p.height ? `${p.height}%` : p.container ? '100%' : 'auto')};
  width: ${(p) => (p.width ? `${p.width}%` : '-webkit-fill-available')};
  background-color: ${(p) => (p.color ? `${p.color}` : 'transparent')};

  flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};
  -webkit-flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};

  margin-top: ${(p) => (p.marginTop ? `${p.marginTop}px` : '0px')};
  margin-bottom: ${(p) => (p.marginBottom ? `${p.marginBottom}px` : '0px')};
  margin-left: ${(p) => (p.marginLeft ? `${p.marginLeft}px` : '0px')};
  margin-right: ${(p) => (p.marginRight ? `${p.marginRight}px` : '0px')};

  display: flex;
  flex: ${(p) => (p.flex ? p.flex : '1')};
  flex-direction: ${(p) => (p.row ? 'row' : 'column')};

  align-items: ${(p) => (p.align ? p.align : p.center ? 'center' : 'none')};

  padding: ${(p) => (p.padding ? `${p.padding}px` : '0px')};
  position: relative;
  justify-content: ${(p) =>
    // eslint-disable-next-line no-nested-ternary
    p.space
      ? 'space-between'
      : // eslint-disable-next-line no-nested-ternary
      p.center && p.horizontal
      ? 'center'
      : p.end
      ? 'flex-end'
      : p.spaceAround
      ? 'space-around'
      : 'none'};
`;

export default ContainerFlex;
