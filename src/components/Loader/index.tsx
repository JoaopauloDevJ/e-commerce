import { PacmanLoader } from 'react-spinners'

import { colors } from '../../stylos'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  )
}

export default Loader
