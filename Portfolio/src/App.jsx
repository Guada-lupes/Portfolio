import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HeaderComponent } from "./componentNew/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { ProyectsComponent } from "./componentNew/ProyectsComponent";
import { StudiesComponent } from "./componentNew/StudiesComponent";
import { WorkComponent } from "./componentNew/WorkComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/proyects" element={<ProyectsComponent/>}/>
        <Route path="/studies" element={<StudiesComponent/>}/>
        <Route path="/work" element={<WorkComponent/>}/>
      </Routes>

      {/* <FooterComponent/> */}
    </>
  );
}

export default App;
