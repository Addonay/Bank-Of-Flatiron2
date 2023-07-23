import React from "react";
import "../stylesheets/App.css";

const Search = (props) => {

  let handleChange = (evt) => {
    props.searchFun(evt.target.value)
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchValue}
        onChange={handleChange}
      />
      <i className="search icon"></i>
    </div>
  );
};

export default Search;
