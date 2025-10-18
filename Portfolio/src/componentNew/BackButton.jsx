import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contex/ThemeProvider";

const BackButton = () => {
    const {language} = useTheme();
const style = {color: "var(--text1)", textAlign: "center", fontFamily: "Proxima Nova", border: "solid 0.5px", borderRadius: "10px", justifySelf: "center", padding: "1.2rem", width: "fit-content", marginTop: "15vh"}

    return <Link to="/"><p style={style}>{language ? "Volver" : "Back"}</p></Link>;
};

export default BackButton;
