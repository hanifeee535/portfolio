import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages import 
import HomePage from './Pages/Hompage';
import AboutPage  from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';

import ContactPage from './Pages/ContactPage';
import  ErrorPage from './Pages/ErrorPage';
// import components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer'
function App (){
  return <>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path = '/' >
            <HomePage/>
          </Route>

          <Route  path = '/about' >
            <AboutPage/>
          </Route>

          <Route  path = '/project' >
            <ProjectPage/>
          </Route>

          

           <Route  path = '/contact' >
            <ContactPage/>
          </Route>

           <Route  path = '*' >
            <ErrorPage/>
          </Route>


        </Switch>
        <Footer/>
      </Router>

  </>
}
export default App
