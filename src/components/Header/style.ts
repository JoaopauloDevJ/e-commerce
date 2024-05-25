import { styled } from 'styled-components'
import { Breakpointer, colors } from '../../stylos'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: 767px) {
    margin-left: 0;
    display: block;
  }
`

export const HeadeBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: 767px) {
    margin-right: 0;

    a {
      padding: 16px; 0;
      display: block;
      text-align: center;
    }
  }
`

export const ButtonCart = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: 767px) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${Breakpointer.tablet}) {
    display: none;
  }
`
