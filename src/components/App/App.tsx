import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "../Header/Header";
import ItemMenu from "../ItemMenu/ItemMenu";
import ItemHeader from "../ItemHeader/ItemHeader";
import Item from "../Item/Item";

const ItemPage = () => (
  <React.Fragment>
    <ItemMenu />
    <ItemHeader />
    <Item />
  </React.Fragment>
);

const MainPage = () => (
  <React.Fragment>
    <Header />
    <ItemPage />
  </React.Fragment>
);

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
