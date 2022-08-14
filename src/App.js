import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import View from './components/view/View';
import Sports from './components/sports/Sports';
import Life from './components/life-skills/Life';
import Thoughts from './components/thoughts/Thoughts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <View />
      <Sports />
      <Life />
      <Thoughts/>
      <Footer />
    </div>
  );
}

export default App;
