import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
