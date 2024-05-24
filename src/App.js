import { Component, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import Home from "./home/home";
import Menu from "./menu/menu";
import Hookah from "./hookah/hookah";
import HappyHour from "./happy-hour/happy-hour";
import BookTable from "./book-table/book-table";
import BigParty from "./big-party/big-party";
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
            <Route
              exact
              path="/happy-hour"
              element={<HappyHour/>}
            ></Route>
            <Route
              exact
              path="/book-table"
              element={<BookTable/>}
            ></Route>
            <Route
              exact
              path="/big-party"
              element={<BigParty/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
