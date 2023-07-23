import React from "react";
import Account from "./Account";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <Account />
      </div>
    );
  }
}

export default App;
