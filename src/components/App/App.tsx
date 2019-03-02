import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// components
import Header from "../Header/Header";
import ItemMenu from "../ItemMenu/ItemMenu";
import ItemHeader from "../ItemHeader/ItemHeader";

const ItemPage = () => (
  <React.Fragment>
    <ItemMenu />
    <ItemHeader />
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
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
