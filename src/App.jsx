import { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Result from './Result'

function App() {
  const [score,setScore] = useState(0);
  const [hidden,setHidden] = useState(true);
  const [message,setMessage] = useState('');
  const [reset,setReset] = useState(false);
  return (
    <div className={`flex flex-col bg-main z-0 ${!hidden?'h-screen overflow-hidden':'min-h-screen'}`}>
      <Header score={score}/>
      <Content setScore={setScore} score={score} setMessage={setMessage} setHidden={setHidden} reset={reset} />
      <Result hidden={hidden} score={score} message={message} reset={reset} setReset={setReset} setHidden={setHidden} />
    </div>
  )
}

export default App
