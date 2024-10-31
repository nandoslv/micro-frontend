import { useState } from 'react'
import Button from './components/Button'

function App() {
  return (
    <>
      <h1>Apicação Remota com Vite Module Federation</h1>
      <Button label="Click me!" onClick={() => alert('Clicked')} />
    </>
  )
}

export default App
