import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

import Header from'./components/Header.jsx'
import Hero from'./components/Hero.jsx'
import Member from'./components/Member.jsx'
import About from'./components/About.jsx'
import Challenge from'./components/Challenge.jsx'
import Contact from'./components/Contact.jsx'
import Footer from'./components/Footer.jsx'


function App() {
  const heroRef = useRef();
  

  useEffect(() => {
    let timeOut = setTimeout(() => {
      ShowHero()
    }, 12000);

    return () => clearInterval(timeOut.current);
  });

  function ShowHero(){
    let hero = heroRef.current;
    
    hero.classList.add("trans")
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    //console.log(scrolled)
    // if (scrolled > 300){
    //   setVisible(true)
    // } 
    // else if (scrolled <= 300){
    //   setVisible(false)
    // }
  };

  window.addEventListener('scroll', toggleVisible);



  return (
    <div className="container-flex parent-container">
      <div className="container-flex header-container">
        {<Header />}
      </div>
      <div className="container-flex hero-container position-relative" ref={heroRef}>
        <div className="container">
          {<Hero />}
        </div>
      </div>
      <div className="container-flex content-container position-relative">
        <div className="container">
          {<Member />}
          {<About />}
        </div>
      </div>
      <div className="container-flex position-relative">
        <div className="row m-0 p-0">
          <div className="col-12 m-0 p-0 emptybox"></div>
        </div>
      </div>
      <div className="container-flex position-relative bg-white">
        <div className="container">
          {<Challenge />}
          {<Contact />}
        </div>
      </div>

      <div className="container-flex footer-container">
        {<Footer />}
      </div>
    </div>
  );
}

export default App;


{/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/}