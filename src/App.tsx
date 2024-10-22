import { useState } from 'react'
import './assets/styles/style.scss'
import Text from './components/01-atoms/Text/Text'
import Button from './components/02-molecules/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text tag='h1' text='Vite + React' variant='title-1' />
      <Button text={`count is ${count}`} clickHandler={() => setCount((count) => count + 1)} />
      <Button variant='secondary' text={`count is ${count}`} clickHandler={() => setCount((count) => count + 1)} />
    </>
  )
}

export default App
