import React from 'react'
import { PresentationComponent } from './PresentationComponent'
import { AboutMeComponenet } from "./AboutMeComponenet"
import "../styles/HeaderComponentStyle.css"


export const HeaderComponent = () => {
  return (
    <header className='header'>
      <PresentationComponent/>
      <AboutMeComponenet/>
    </header>
  )
}
