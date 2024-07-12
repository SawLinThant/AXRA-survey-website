import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'

function App() {

  return (
    <>
      <Routes>
        <Route path='/Dashboard/*' element={<Dashboard/>} />
        <Route path='/Form/*' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App

