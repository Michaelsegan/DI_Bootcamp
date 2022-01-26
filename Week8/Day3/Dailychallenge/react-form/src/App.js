import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} value={this.state.value} value={this.state.value} >
        <label>
          <input type='text' placeholder='First Name'></input><br></br>
          <input type='text' placeholder='Last Name'></input><br></br>
          <input type='text' placeholder='Age'></input><br></br>
          <input type='radio'></input>Male<br></br>
          <input type='radio'></input>Female<br></br>

          
          

          Select your destination
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Usa">Usa</option>
            <option value="Brazil">Brazil</option>
          </select>

        </label>
        <input type="submit" value="Submit" />
<p>{this.state.value}</p>
      </form>
    );
  }
}







export default App;
