import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
const style = {color: "var(--text1)", fontSize: "1.2rem", textAlign: "center", fontFamily: "Proxima Nova", border: "solid 0.5px", borderRadius: "10px", justifySelf: "center", padding: "1.2rem", width: "fit-content", marginTop: "15vh"}

    return <Link to="/"><p style={style}>Volver</p></Link>;
};

export default BackButton;
