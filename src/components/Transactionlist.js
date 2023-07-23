import React from "react";
import Transaction from "./Transaction";
import Select from "./Select";
import "../stylesheets/App.css";
import Search from "./Search";

const Transactionlist = (props) => {

  let componentArray = props.transactions.map(transactionObj => {
    return <Transaction 
            key={transactionObj.id} 
            transaction={transactionObj} 
            deleteTransactionFun={props.deleteTransactionFun}
          />
  });

  return (
    <div className="transaction-list">
      <h2 className="ui header">Transaction List</h2>

      <div className="transaction-controls">
        <Select select={props.select} selectFun={props.selectFun} />
        <Search searchValue={props.searchValue} searchFun={props.searchFun} />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {componentArray}
        </tbody>
      </table>
    </div>
  );
};

export default Transactionlist;
