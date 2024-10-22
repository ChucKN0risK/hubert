import { useState } from 'react'
import './assets/styles/style.scss'
import Text from './components/01-atoms/Text/Text'
import Button from './components/02-molecules/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text tag='h1' variant='title-1'>Couou</Text>
      <Button onClick={() => setCount((count) => count + 1)}>
        <Text>{`count is ${count}`}</Text>
      </Button>
      <Button variant='secondary' onClick={() => setCount((count) => count + 1)}>
        <Text>{`count is ${count}`}</Text>
      </Button>
    </>
  )
}

export default App
