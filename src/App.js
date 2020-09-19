import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SocialIcons from './components/socialicon/SocialIcons';
import NavBar from './components/menu/NavBar';
import { Swipeable } from 'react-swipeable'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContactForm from './components/contact/ContactForm';
import About from './components/about/About';
import Burger from './components/Burger';
import Resume from './components/resume/Resume';



function App() {

  const [sidemenu, setSideMenu] = useState(0)

  let Main = () => (
    <>
      <SocialIcons />
      <LandingPage sidemenu={sidemenu} setSideMenu={setSideMenu} />
      <NavBar sidemenu={sidemenu} setSideMenu={setSideMenu} />
    </>
  )

  let Contact = () => (
    <>
      <ContactForm />
      <Burger sidemenu={sidemenu} setSideMenu={setSideMenu}/>
      <NavBar sidemenu={sidemenu} setSideMenu={setSideMenu} />
    </>
  )

  let AboutPage = () => (
    <>
      <About />
      <Burger sidemenu={sidemenu} setSideMenu={setSideMenu}/>
      <NavBar sidemenu={sidemenu} setSideMenu={setSideMenu} />
    </>
  )


  return (
    <BrowserRouter>
      <Swipeable onSwipedRight={() => setSideMenu(2)} onSwipedLeft={() => setSideMenu(0)} >
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </Swipeable>
    </BrowserRouter>

  );
}

export default App;
