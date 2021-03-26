import styled from 'styled-components';

export interface IGrid {
  gap?: number;
  xs?: number;
  md?: number;
  sm?: number;
  backgroundColor?: string;
}

const Grid = styled.div<IGrid>`
  height: auto;
  max-width: 100%;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'white')};

  display: grid;
  grid-template-columns: repeat(${(p) => (p.xs ? p.xs : 1)}, 1fr);
  grid-gap: ${(p) => (p.gap ? `${p.gap}px` : '0px')};

  @media (max-width: 900px) {
    grid-template-columns: repeat(${(p) => (p.md ? p.md : 1)}, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(${(p) => (p.sm ? p.sm : 1)}, 1fr);
  }
`;

export default Grid;
