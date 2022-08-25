import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import View from "./components/view/View";
import Sports from "./components/sports/Sports";
import Life from "./components/life-skills/Life";
import Thoughts from "./components/thoughts/Thoughts";
import Footer from "./components/footer/Footer";
/**
 *  App.js
 *  The main architecture of application
 *  This page includs header, nav, view, sports, life skills, thoughts, and footer. Header shows the title of application, Nav means the navigation and when you click the certain icon then you will jump to the specific part. View will present the featured places in Tampere and show visited experience. Sports part will show what type of sports I will do and where I can do those sports. Life skills inculde supermarkets and transpotation, because market provide daily stuff for people and transpotation is related the commuter. Thoughts mean what appeared in my mind. Footer shows all parts of the service link and right.

 */
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <View />
      <Sports />
      <Life />
      <Thoughts />
      <Footer />
    </div>
  );
}

export default App;
