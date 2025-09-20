import React from 'react'
import logogh from "../assets/GitHub_Logo.png"
import logoghb from "../assets/GitHub_Logo_White.png"
import "../styleNew/GitHubLogoPathStyle.css"
import { useTheme } from '../contex/ThemeProvider'

export const GitHubLogoPath = ({path}) => {
  const {theme}= useTheme();
  const color = theme === "dark" ? "white" : "dark";
  const logo = theme === "dark" ? logoghb : logogh;
  return (
    <div className="enlace-github-container">
      <a  className="github-enlace" href={path}><img src={logo} alt="logo de git hub" /><svg xmlns="http://www.w3.org/2000/svg" fill={color} className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
</svg></a>
</div>
  )
}
