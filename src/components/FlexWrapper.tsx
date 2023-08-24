import styled from 'styled-components';


type FlexWrapperProsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: 100%;
`