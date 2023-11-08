import {useState} from 'react'
import {Header , Home , Tuto , Expo} from "./components/index"
import './App.css'

function App() {
  const [componentCharged , setComponentCharged] = useState(<Home />)

  return (
    <>
      <Header setComponentCharged={setComponentCharged}/>
      {componentCharged}
    </>
  )
}

export default App
