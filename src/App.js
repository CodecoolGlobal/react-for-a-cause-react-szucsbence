import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

import Header from'./components/Header.jsx'
import Hero from'./components/Hero.jsx'
import Member from'./components/Member.jsx'
import About from'./components/About.jsx'
import Challenge from'./components/Challenge.jsx'
import Contact from'./components/Contact.jsx'
import Footer from'./components/Footer.jsx'


function App() {
  const heroRef = useRef();
  const [showToTopButton, setShowToTopButton] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 800) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

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
      <button
  className="to-top-button"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{ display: showToTopButton ? 'block' : 'none' }}
>
<i className="fa-solid fa-circle-chevron-up"></i>
 </button>
    </div>
  );
}

export default App;
