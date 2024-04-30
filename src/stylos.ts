import { createGlobalStyle } from 'styled-components'

export const cores = {
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  branco: '#EEEEEE'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }
`
