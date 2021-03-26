import styled from 'styled-components';

export interface ITitleAppProps {
  marginBottom?: number;
}

const TitleApp = styled.span<ITitleAppProps>`
  font-size: 1.2em;
  font-weight: 400;
  color: #4a4b4a;
  margin: 0 0 ${(p) => (p.marginBottom ? `${p.marginBottom}%` : '0px')} 0;
`;

export default TitleApp;
