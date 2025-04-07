import React from 'react'
import { PresentationComponent } from './PresentationComponent'
import { SocialProfilesComponent } from './SocialProfilesComponent'
import "../styles/HeaderComponentStyle.css"


export const HeaderComponent = () => {
  return (
    <header className='header'>
      <PresentationComponent/>
      <SocialProfilesComponent/>
    </header>
  )
}
