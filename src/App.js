import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Store from './components/Store/Store';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact component={Store}/>
        <Route path='/layout' component={Layout}/>
        <Route path='/slider' component={Slider}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
