import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CustomTable from './components/customtable'

function App() {

  return (
    <>
      <Routes>
        <Route path='/Dashboard/*' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App

