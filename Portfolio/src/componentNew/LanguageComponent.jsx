import React from 'react';
import { useTheme } from '../contex/ThemeProvider';
import {ToggleThemeComponent} from "../componentNew/ToggleThemeComponent"

const LanguageComponent = () => {
const {setLanguage, language} = useTheme();
function setEs() {
    if(language != true){
        setLanguage(true)
        window.location.reload();
    }
}
function setEn() {
        if(language != false){
        setLanguage(false)
        window.location.reload();
    }
}
const pStyles = {color: "grey", cursor: "pointer"}
    return (
        <div style={{display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", position: "absolute",
    justifySelf: "end", top: "1rem"}}>
            <p style={pStyles} onClick={setEs}>ES</p>
            <p style={pStyles}  onClick={setEn}>EN</p>
            <ToggleThemeComponent/>
        </div>
    );
};

export default LanguageComponent;