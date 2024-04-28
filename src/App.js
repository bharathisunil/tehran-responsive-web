import { Component } from "react";
import "./App.scss";
import Home from "./home/home";
import {
  BrowserRouter,
  Routes,
  Redirect,
  Navigate,
  Route,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            ></Route>
            <Route
              exact
              path="/home"
              element={<Home/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
