import { Suspense } from 'react'
import { ButtonProps } from './types/Button';
import { lazy } from 'react';
const RemoteButton = lazy<React.FC<ButtonProps>>(() => import('RemoteApp/Button'));

function App() {  
  const label = 'Botão Remoto'
  const onclick = ()=>{
    return alert('Clicou!')
  }

  return (    
    <Suspense fallback={<p>Esperando</p>}>      
      <RemoteButton label={label} onClick={onclick}/>
    </Suspense>      
  )
}

export default App
