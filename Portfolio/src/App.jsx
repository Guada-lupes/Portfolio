import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HeaderComponent } from "./componentNew/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { ProyectsComponent } from "./componentNew/ProyectsComponent";
import { StudiesComponent } from "./componentNew/StudiesComponent";
import { WorkComponent } from "./componentNew/WorkComponent";
import { OthersComponent } from "./componentNew/OthersComponent";
import { AboutMeComponent } from "./componentNew/AboutMeComponent";
import { ContactComponent } from "./componentNew/ContactComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/proyects" element={<ProyectsComponent/>}/>
        <Route path="/studies" element={<StudiesComponent/>}/>
        <Route path="/work" element={<WorkComponent/>}/>
        <Route path="/others" element={<OthersComponent/>}/>
        <Route path="/aboutme" element={<AboutMeComponent/>}/>
        <Route path="/contact" element={<ContactComponent/>}/>
      </Routes>
      <FooterComponent/>
    </>
  );
}

export default App;
