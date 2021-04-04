import { Global } from '@emotion/react'
import React from 'react'
import { ToastProvider } from './contexts/toast-context'
import Routes from './routes/Routes'

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  )
}

export default App
