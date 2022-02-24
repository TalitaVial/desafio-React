import React from "react";

import './Header.css'

import IconLinkedin from './assets/linkedin.svg'
import IconFacebook from './assets/facebook.svg'
import IconDiscord from './assets/discord.svg'
import IconDevs from './assets/logo.svg'


export default function Header() {

    return(
      <div className="header">
       <div className="header-icon">
      <img src={IconLinkedin} alt="Logo Linkedin" />
      <img src={IconFacebook} alt="Logo facebook" />
      <img src={IconDiscord} alt="Logo Discord" />
      </div>
      <div className="header-balle">
        <img src={IconDevs} alt="Logo Ballerini Devs" />
        <h1>Ballerini Devs</h1>
      </div>
      </div>
     
    )
  
}