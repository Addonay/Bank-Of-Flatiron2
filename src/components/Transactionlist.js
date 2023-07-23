import React from "react";
import Transaction from "./Transaction";
import Select from "./Select"

const Transactionlist = (props) => {

  let componentArray = props.transactions.map(transactionObj => {
    return <Transaction 
            key={transactionObj.id} 
            transaction={transactionObj} 
            deleteTransactionFun={props.deleteTransactionFun}
          />
  })


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
            < Select select={props.select} selectFun={props.selectFun}/>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {componentArray}
      </tbody>
    </table>
  );
};

export default Transactionlist;
