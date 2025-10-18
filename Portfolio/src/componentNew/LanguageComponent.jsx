import React from 'react';
import { useTheme } from '../contex/ThemeProvider';
import {ToggleThemeComponent} from "../componentNew/ToggleThemeComponent"

const LanguageComponent = () => {
const {setLanguage, language} = useTheme();
function setEs() {
    if(language != true){
        setLanguage(true)
    }
}
function setEn() {
        if(language != false){
        setLanguage(false)
    }
}
const pStyles = {color: "grey", cursor: "pointer", focus: {textDecoration: "underline"}}
const pStylesFocus = {color: "grey", cursor: "pointer", textDecoration: "underline"}

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", position: "absolute",
    justifySelf: "end", top: "1rem"}}>
            <p style={language ?  pStylesFocus: pStyles} onClick={setEs}>ES</p>
            <p style={language ? pStyles : pStylesFocus }  onClick={setEn}>EN</p>
            <ToggleThemeComponent/>
        </div>
    );
};

export default LanguageComponent;