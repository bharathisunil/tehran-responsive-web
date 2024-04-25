import React from "react"
/* The following line can be included in a src/App.scss */
/* The following line can be included in a src/App.scss */
//import Navbar from './Navbar';

  /* The following line can be included in your src/index.js or App.js file */
  import {
    Navbar,
    Footer,
    Gallery,
    NavBar,
    Flavours,
    Reservation,
    Welcome,WelcomePage
  } from "./components";
  
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  
  return (
    <div>
      <NavBar></NavBar>
      <Navbar/>
      <WelcomePage></WelcomePage>
      {/*<Welcome></Welcome>*/}
      <Flavours></Flavours>
      <Gallery></Gallery>
     
      {/*<Reservation></Reservation>
  <Footer></Footer>*/}
       
    </div>
  );
};

export default App;
