import styled from 'styled-components'
import { Props } from './index'
import { colors } from '../../stylos'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(Props) =>
    Props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(Props) =>
      Props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
