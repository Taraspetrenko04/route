import React, { Component } from 'react';
import './style.css';
import { Redirect } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';

export default class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {isToggleOn: true};
    
    //     // Эта привязка обязательна для работы `this` в колбэке.
    //     this.handleClick = this.handleClick.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //   }

      handleClick(e) {
       console.log(`/${e.target.name}`);
       return <Redirect to={`/${e.target.name}`} />
      }
    
    render(){
    return(
        <div className='header'>
            <h1>Header</h1>
            <ul>
            <li><Link to="/">STORE</Link></li>
            <li><Link to="/layout">LAYOUT</Link></li>
            <li><Link to="/slider">SLIDER</Link></li>
        </ul>
        </div>
    )}
}

