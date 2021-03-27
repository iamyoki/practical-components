import React from 'react'
import { Router } from '@reach/router'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <HomePage path="/" />
    </Router>
  )
}

export default App
