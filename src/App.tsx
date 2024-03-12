import ArrowCabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <ArrowCabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
