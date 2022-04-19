import React, { Component } from 'react';
import { Button } from '../Button';
import {MenuItems} from "./MenuItems";
import "./Navbar.css";


class Navbar extends Component{
  state={clicked:false}

  handleClick = () =>{
    this.setState({ clicked : !this.state.clicked})
  }
    render(){
        return (
            <nav className='NavbarItems'>
           
                 <h2 className='Navbar-logo'>
                    ZAP  <i className="fa-brands fa-accessible-icon"></i>
                 </h2>  
                 <div className="menu-icon" onClick={ this.handleClick }>  
                    <i className={this.state.clicked ? 'fa-solid fa-bars':"fa-solid fa-xmark-large"}></i>    
                 </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                  {MenuItems.map((item,index)=>{
                   return (
                       <li key={index}> 
                          <a className={item.cName} href={item.url}>
                          {item.title}
                    
                       </a>
                    </li>
                  )
            })}
         
              
         </ul>
           <Button>Download</Button>
        </nav>

        )
    }
}
export default  Navbar;
