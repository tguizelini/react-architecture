import styled from 'styled-components'

interface IMyOwnContainerProps{
    color?: string
}

export const MyOwnContainer = styled.div<IMyOwnContainerProps>`
    height: 100%;
    width: 100%;
    background-color: ${(p) => (p.color ? p.color : '#cccc')};
`