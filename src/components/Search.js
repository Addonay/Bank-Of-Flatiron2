import React from "react";

const Search = (props) => {

  let handleChange = (evt) => {
    props.searchFun(evt.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchValue}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
