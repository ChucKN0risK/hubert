import { useState } from 'react'
import { FaceIcon } from "@radix-ui/react-icons"
import reactLogo from './assets/vectors/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/01-atoms/Text'

interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled?: boolean;
}

function MyButton({ title }: MyButtonProps) {
  return (
    <button>{title}</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FaceIcon />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <Text text={`count is ${count}`} />
        </button>
        <MyButton title='coucou' />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
