import React from "react";
import Transactionlist from "./Transactionslist";
import Search from "./Search";
import AddTransaction from "./AddTransaction";


class Account extends Component {

  state = {
    transactions : [],
    search: "",
    select: "all"
  } 

  componentDidMount(){
    fetch('http://localhost:8001/transactions')
    .then(r => r.json())
    .then(resp => {
      this.setState({
        transactions: resp
      })
    })
  }


  // addTransactionFun = (addTransaction) =>{
  //   let newTransArr = [...this.state.transactions, addTransaction]
  //   this.setState({
  //     transactions: newTransArr
  //   })
  // }
  

  addTransactionFun = (addTransaction) =>{
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, addTransaction]
      }
    })
  }

  deleteTransactionFun = (deletedTransaction) => {
    let newTransArr = this.state.transactions.filter(transaction => {
      return transaction.id !== deletedTransaction.id
    })

    this.setState({
      transactions: newTransArr
    })
  }



  searchFun = (searchResult) => {
    this.setState({
      search: searchResult
    })
  }

  selectFun = (selectedResult) => {
    this.setState({
      select: selectedResult
    })
  }



  filterSearchTransactions = () => {
    let {transactions, search, select} = this.state
    
    let filterSearch = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(search.toLowerCase())
    })

    switch(select){
      case "all" :
        return filterSearch

      case "descriptionUP" : 
        return filterSearch.sort( (wordA, wordB) => {
            return wordA.description.localeCompare(wordB.description)
        })

      case "descriptionDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.description.localeCompare(wordA.description)
      })
        
      case "categoryUP" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordA.category.localeCompare(wordB.category)
      })

      case "categoryDOWN" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordB.category.localeCompare(wordA.category)
      })

      case "amountUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.amount - numB.amount
      })

      case "amountDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return numB.amount - numA.amount
      })

      case "dateUP" : 
      return filterSearch.sort( (numA, numB) => {
          return new Date(numA.date) - new Date(numB.date)
      })

      case "dateDOWN" : 
      return filterSearch.sort( (numA, numB) => {
          return new Date(numB.date) - new Date(numA.date)
      })

      default:
    }
  }



  render() {
    return (
      <div>
        <Search 
           searchValue={this.state.search}
           searchFun={this.searchFun}
        />

        <AddTransaction 
          addTransactionFun={this.addTransactionFun}
        />

        <Transactionslist
          transactions={this.filterSearchTransactions()}
          select={this.state.select}
          selectFun={this.selectFun}
          deleteTransactionFun={this.deleteTransactionFun}
         />
      </div>
    );
  }
}

export default Account;
