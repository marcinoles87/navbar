import React, { Component } from 'react'

import {ItemMenu} from './ItemMenu'

import logo from './img/logo192.png'

import './menu.css'


class Navbar extends Component {
 
    
      state = { clicked : false}

  render() {

   const handleOnClick = () => {
    this.setState(  {
      clicked :!this.state.clicked
    })
   }

   console.log(this.state.clicked)

    return (
      <nav className='menu-wrapper'>

      <h1 className='logo'>React<img src={logo} alt="logo"></img></h1> 

      <i class={this.state.clicked ? 'fa fas' : 'fa fas'} onClick={handleOnClick}></i>

      <ul className='navbar-item'>
        {ItemMenu.map( (item,index) => {
          return(
            <li key={index} className={item.cName}><a href='#' >{item.title}</a></li>
          )
        })}
      </ul>
    
  
  </nav>
    )
  }
}

export default Navbar


