import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]

    }
  }

handleLocation = (indexLocation) => {
  alert (indexLocation)
}

  render(){
    let box = this.state.squares.map((value, index)=> {
      return (
        <Square
        value = {value}
        index = {index}
        handleLocation = {this.handleLocation}
        />
      )
    })
    return(
      <React.Fragment>
      <h1>Treasure Hunt App</h1>
      <div id="board">
        { box }
      </div>
      </React.Fragment>
    )
  }
}
export default App
