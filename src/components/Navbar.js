import React, { Component } from 'react'

import {ItemMenu} from './ItemMenu'

import logo from './img/logo192.png'

import './menu.css'


class Navbar extends Component {
 
    
      state = { clicked : true}

  render() {

  const docWidth = document.querySelector('body')
  console.log(docWidth)
  const wd = docWidth.offsetWidth

  const extra = (e) => {
  if(wd < 300){
    e.preventDefault()
    console.log('hide menu')
  }}

  
   const handleOnClick = () => {
    this.setState(  {
      clicked :!this.state.clicked
    })
   }

   

    return (
      <nav className='menu-wrapper'>

      <h1 className='logo'>React<img src={logo} alt="logo"></img></h1> 

      <i class={this.state.clicked ? 'fas fa-times ' : 'fas fa-bars'} onClick={handleOnClick} onChange={extra}></i>

      <ul className={this.state.clicked ?'navbar-item-active' : 'navbar-item-none'}>
        {ItemMenu.map( (item,index) => {
          return(
            <li key={index} className={item.cName}><a href={item.url}>{item.title}</a></li>
          )
        })}
      </ul>
    
  
  </nav>
    )
  }
}

export default Navbar


