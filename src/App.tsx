import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './stylos'
import Rotas from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
