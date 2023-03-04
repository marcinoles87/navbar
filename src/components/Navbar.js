import React, { Component } from 'react'

import {ItemMenu} from './ItemMenu'

import logo from './img/logo192.png'

import './menu.css'


class Navbar extends Component {

  render() {

    return (
      <nav className='menu-wrapper'>
      <h1 className='logo'>React<img src={logo} alt="logo"></img></h1>

      <ul>
        {ItemMenu.map( (item,index) => {
          return(
            <li key={index}>{item.title}</li>
          )
        })}
      </ul>
    
  
  </nav>
    )
  }
}

export default Navbar


