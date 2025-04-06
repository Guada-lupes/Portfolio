import React from 'react'
import "../styles/HomePageStyle.css"
import { TechnologiesComponent } from '../components/TechnologiesComponent'
import { WorkComponent } from '../components/WorkComponent'
import { StudiesComponent } from "../components/StudiesComponent"
import { ExperienceComponent } from '../components/ExperienceComponent'

export const HomePage = () => {
  return (
    <main className='home-page-section'>
<TechnologiesComponent/>
<WorkComponent/>
<StudiesComponent/>
<ExperienceComponent/>
    </main>
  )
}
