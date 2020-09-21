import React, { useState, useEffect }  from 'react';
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

function whois(data) {
  let { country_name, IPv4 } = data;
  let raw = JSON.stringify(data);
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  let form = new FormData();
  form.append('country', country_name)
  form.append('raw', raw)
  form.append('query', IPv4)
  form.append('time', time)
  form.append('date', date)

  let url = 'https://script.google.com/macros/s/AKfycbwJiseM80CZWrOMxykzhs4hs8b3hiiFYaCZ31qxyEovXECdyQ/exec'

  fetch(url, { method: 'post', mode: 'cors', body: form })
 
}


function App() {

  const [sidemenu, setSideMenu] = useState(0)

   

  useEffect(() => {

    (async () => {
      let result = await fetch('https://geoip-db.com/json/')
      let data = await result.json()
      whois(data)
    })()

  },[])
 

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

