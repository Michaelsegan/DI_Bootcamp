//state and the properties
import React from 'react';


 class transactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNumber:'',
            bankNumber:'',
            name:'',
            amount:''
            

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    
    }

    handleChange(event) {
        this.setState({accountNumber: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.accountNumber);
        event.preventDefault();
      }


    render() {
        return (
            <div>
                <h1>Make Transaction</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Account Number" value={this.state.value} ></input><br></br>
                    <input type="text" placeholder="Bank Number"></input><br></br>
                    <input type="text" placeholder="name"></input><br></br>
                    <input type="text" placeholder="amount"></input><br></br>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
            
        )
    }

}
export default transactionForm;