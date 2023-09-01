
import React, { Component } from 'react'
import './style.css'


export default class STATE extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        count : 0,
     }
   }
   
   handleIncrement = () =>{
       this.setState({
        count : this.state.count + 1
       })
   }

   handleDecrement = () =>{
    this.setState({
     count : this.state.count - 1
    })
}

  render() {

        const {count} =this.state
    return (
      <div>
        <h1> Count : {count}</h1>
       <h3> <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button></h3>
      </div>
    )
  }
}



