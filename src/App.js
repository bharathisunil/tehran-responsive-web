import { Component, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
