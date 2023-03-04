import React, { Component } from 'react'

import {ItemMenu} from './ItemMenu'

import logo from './img/logo192.png'

import './menu.css'


class Navbar extends Component {

  render() {

    return (
      <nav className='menu-wrapper'>

      <h1 className='logo'>React<img src={logo} alt="logo"></img></h1>

      <ul className='navbar-item'>
        {ItemMenu.map( (item,index) => {
          return(
            <li key={index} className={item.cName}><a href='#'>{item.title}</a></li>
          )
        })}
      </ul>
    
  
  </nav>
    )
  }
}

export default Navbar


