import React, { Component } from 'react'

import {ItemMenu} from './ItemMenu'

import logo from './img/logo192.png'

import './menu.css'


class Navbar extends Component {
 
    
      state = { clicked : true ,
                media : false
      }


  render() {

   const handleOnClick = () => {

    
    this.setState(  {
      clicked :!this.state.clicked,
      media : !this.state.media
    })
  }
   


  

   

    return (
      <nav className='menu-wrapper'>

      <h1 className='logo'>React<img src={logo} alt="logo"></img></h1> 

      <div className='nav-icon'>
      <i className={this.state.clicked ? 'fas fa-times ' : 'fas fa-bars'} onClick={handleOnClick}></i>
      </div>

      <ul className={this.state.clicked ?'navbar-item-active' : 'navbar-item-none'  }>
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


