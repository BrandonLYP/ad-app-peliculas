import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Serie from './pages/Serie'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/serie/:id" element={<Serie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
