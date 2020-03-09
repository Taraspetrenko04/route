import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Store from './components/Store/Store';
import Slider from './components/Slider/Slider';

class App extends Component {
  
  render(){
  return (
    <React.Fragment>
      <Header />
      <Switch >
        <Route path='/' exact render={ () => <Store />}/>
        <Route path='/layout' render={ () => <Layout />}/>
        <Route path='/slider' render={ () => <Slider />}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
  }
}

export default App;
