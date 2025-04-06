import React from 'react'
import "../styles/HomePageStyle.css"
import { PresentationComponent } from '../components/PresentationComponent'
import { AboutMeComponenet } from '../components/AboutMeComponenet'
import { TechnologiesComponent } from '../components/TechnologiesComponent'
import { WorkComponent } from '../components/WorkComponent'
import { StudiesComponent } from "../components/StudiesComponent"

export const HomePage = () => {
  return (
    <section className='home-page-section'>
<PresentationComponent/>
<AboutMeComponenet/>
<TechnologiesComponent/>
<WorkComponent/>
<StudiesComponent/>
    </section>
  )
}
