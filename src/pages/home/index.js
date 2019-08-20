import React from 'react';
import Header from '../../componets/header';
import Body from '../../componets/body';
import Footer from '../../componets/footer';
import { Animated } from "react-animated-css";

function Home() {
  return (
    <div className="App">
      <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
        <Header/>
        <Body/>
        <Footer/>
      </Animated>
    </div>
  );
}

export default Home;
