import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasure: null,
      bomb: null,
      //another map function, this array is used to house the new values that we'd use to reassign the value of squares
      tree: []
    }
  }

componentDidMount(){
  let { squares } = this.state 
   let treasure = 0
   let bomb = 0
  while ( treasure === bomb ){
    treasure = Math.floor(Math.random() * squares.length)
    bomb = Math.floor(Math.random() * squares.length)
  }
  this.setState({treasure: treasure, bomb: bomb})
}

handleLocation = (indexLocation, value) => {
  // alert (indexLocation)
  let { squares, bomb, treasure } = this.state
  console.log(bomb, treasure);
  if(indexLocation === bomb ){

    squares[indexLocation] = "bomb"
    this.setState({squares: squares})

  } else if (indexLocation === treasure) {
    alert("You win!")
    squares[indexLocation] = "treasure"
    this.setState({squares: squares})

  } else {
    
    squares[indexLocation] = "tree"
    this.setState({squares: squares})

  }
}

  render(){
    let box = this.state.squares.map((value, index)=> {
      return (
        <Square
        value = {value}
        index = {index}
        handleLocation = {this.handleLocation}
        squares = {this.squares}
        key = {index}
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
