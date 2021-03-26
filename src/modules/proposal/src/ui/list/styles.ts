import styled from 'styled-components'

interface IMyOwnContainer2Props{
    color?: string
}

export const MyOwnContainer2 = styled.div<IMyOwnContainer2Props>`
    height: 100%;
    width: 100%;
    background-color: ${(p) => (p.color ? p.color : '#cccc')};
`