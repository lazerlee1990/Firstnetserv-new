import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import Loader from './components/Loader';
// import Loader from './components/Loader'
import Navigation from './components/Nav';
import ScrollToTop from './components/ScrollToTop';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Loadable from '@loadable/component';


// CSS

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// register lottie and define custom element 
defineLordIconElement(loadAnimation);


// Lazy Load Pages
const Home = Loadable(() => import('./pages/Home'));
const VpsHosting = Loadable(() => import('./pages/VpsHosting'));
const SharedHosting = Loadable(() => import('./pages/SharedHosting'));
const WebDesign = Loadable(() => import('./pages/WebDesign'));
const Blog = Loadable(() => import('./pages/Blog'));
const Individual = Loadable(() => import('./pages/Sub/Individual'));
const Contact = Loadable(() => import('./pages/Contact'));
const Luke = Loadable(() => import('./pages/Luke'));
const Lee = Loadable(() => import('./pages/Lee'));
const Coast = Loadable(() => import('./pages/Sub/Coast'));
const ideal365 = Loadable(() => import('./pages/Sub/Ideal365'));
const metro = Loadable(() => import('./pages/Sub/Metro'));
const stream = Loadable(() => import('./pages/Sub/Stream'));
const djsoundrental = Loadable(() => import('./pages/Sub/djsoundrental'));
const graphics = Loadable(() => import('./pages/Sub/graphics'));
const video = Loadable(() => import('./pages/Sub/video'));
const recruitment = Loadable(() => import('./pages/Sub/Recruitment'));


const RouterTransition = ({children}) => {
  const ref = useRef();
  return (
    <>
      <LoadingBar color='#6610f2' ref={ref} />
      <Route render={({location}) => (
        <TransitionGroup>
              <CSSTransition
                timeout={500}
                classNames='fade'
                key={location.key}
              >
              <div>
                <ScrollToTop />
                <Loader red={ref}/>
                <Switch location={location}>
                  {children}
                </Switch>     
              </div>

            </CSSTransition>
          </TransitionGroup>
      )} />
    </>
  )
}


const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <RouterTransition>
        <Route exact path='/' component={Home}/>    
        <Route path='/vps-hosting' component={VpsHosting}/>    
        <Route path='/shared-hosting' component={SharedHosting}/>    
        <Route path='/web-design' component={WebDesign}/>    
        <Route path='/blog' component={Blog}/>    
        <Route path='/individual' component={Individual}/>    
        <Route path='/contact' component={Contact}/>    
        <Route path='/luke' component={Luke}/>    
        <Route path='/liam' component={Lee}/>    
        <Route path='/coast' component={Coast}/>    
        <Route path='/ideal365' component={ideal365}/>  
        <Route path='/metro' component={metro}/>  
        <Route path='/stream' component={stream}/>  
        <Route path='/djsoundrental' component={djsoundrental}/>  
        <Route path='/graphics' component={graphics}/>  
        <Route path='/video' component={video}/>  
        <Route path='/recruitment' component={recruitment}/>  
      </RouterTransition>
      <Footer />   
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


