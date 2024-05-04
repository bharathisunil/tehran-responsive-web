import { Component, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import Home from "./home/home";
import Menu from "./menu/menu";
import Hookah from "./hookah/hookah";
import {
  BrowserRouter,
  Routes,
  Redirect,
  Navigate,
  Route,
} from "react-router-dom";
class App extends Component {
  componentDidMount() {
    AOS.init();
  }
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
            <Route
              exact
              path="/menu"
              element={<Menu/>}
            ></Route>
            <Route
              exact
              path="/hookah"
              element={<Hookah/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
