import React, {Component} from "react";
import "../stylesheets/App.css";

class AddTransaction extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  
  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
      .then(r => r.json())
      .then(newTransaction => {
        this.props.addTransactionFun(newTransaction);
        this.setState({
          date: "",
          description: "",
          category: "",
          amount: ""
        });
      });
  };

  render() {

    return (
      <div className="segment">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <button className="button" type="submit" > 
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransaction;
