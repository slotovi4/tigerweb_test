import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../store";

// components
import Header from "../Header/Header";
import ItemMenu from "../ItemMenu/ItemMenu";

const MainPage = () => (
  <React.Fragment>
    <Header />
    <ItemMenu />
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
