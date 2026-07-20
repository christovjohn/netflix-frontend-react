import React from "react"
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPost/RowPost'
import "./App.css"
import { action,originals } from "./urls"

function App() {
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Orginals'/>
      <Rowpost url={action}title='Action' isSmall/>  

    </div>
  )
  

 
}

export default App
