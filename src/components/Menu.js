import React, { Component } from 'react'

import ItemMenu from './ItemMenu'
import logo from './img/logo192.png'

import './menu.css'


export default class Menu extends Component {
  render() {

    return (
      <div className='menu-wrapper'>
      <h1 className='logo'>React<img src={logo}></img></h1>
      
      <ItemMenu></ItemMenu>
  </div>
    )
  }
}


