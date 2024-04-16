import React, { Component } from 'react'


export default class DTH_eventHanlde3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Đỗ Trọng Huy",
            age: 20
        };    
    }
    handleChange = (e) =>{
        this.setState({
            name: "Lê Vinh Huy",
            age : 21,
        })
    }
  
  
    render() {
    return (
      <div className='alert alert-primary'>
            <h2>thay đổi dữ liệu trong state</h2>
            <p>dữ liệu: {this.state.name} - {this.state.age}</p>
            <button onClick={this.handleChange}>Thay đổi name</button>
            <button onClick={this.handleChange}>Thay đổi age</button>
      </div>
    )
  }
}
