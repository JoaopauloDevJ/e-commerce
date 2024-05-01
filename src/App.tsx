import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalCss } from './stylos'
import Header from './components/Header'
import Home from './pages/Home'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={Rotas} />
    </>
  )
}

export default App
