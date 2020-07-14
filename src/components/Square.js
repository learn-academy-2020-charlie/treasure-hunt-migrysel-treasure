import React, { Component } from 'react'


class Square extends Component{

  cursorClick = ()=>{
    this.props.handleLocation(this.props.index)
  }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick = {this.cursorClick}>
        {this.props.value}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
