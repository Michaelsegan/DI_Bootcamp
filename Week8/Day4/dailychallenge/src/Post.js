import React, { Component } from 'react';
import axios from 'axios';

export class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:''
         
         
      }
    }
    changeHandler = e => {
        this.setState({value: e.target.value})
        console.log(this.state);
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state.value);
        axios.post("http://localhost:3000/api/world",this.state.user )

    }
    
  render() {
      const user =this.state
    return( <div>
        <h1>Hello from Express</h1>
        <h2><b>Post to server:</b></h2>
        <form onSubmit={this.submitHandler}>
        <input 
        type="text"
        name="user"
        value={user}
        onchange={this.changeHandler}></input>
        <button type="submit">Submit</button>
        <p>{}</p>
        </form>
         </div>
    )
  }
}

export default Post;
