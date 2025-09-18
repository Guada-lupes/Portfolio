import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./componentNew/HeaderComponent";
import { FooterComponent } from "./componentNew/FooterComponent";
import { ProyectsComponent } from "./componentNew/ProyectsComponent";
import { StudiesComponent } from "./componentNew/StudiesComponent";
import { WorkComponent } from "./componentNew/WorkComponent";
import { OthersComponent } from "./componentNew/OthersComponent";
import { AboutMeComponent } from "./componentNew/AboutMeComponent";
import { ContactComponent } from "./componentNew/ContactComponent";
import { IconosComponent } from "./componentNew/IconosComponent";
import { ScrollToTopComponents } from "./componentNew/ScrollToTopComponents";
import { TechnologiesComponent } from "./componentNew/TechnologiesComponent";
import { ThemeProvider } from "./contex/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <HeaderComponent />
        <ScrollToTopComponents />
        <Routes>
          <Route path="/" element={<IconosComponent />} />
          <Route path="/proyects" element={<ProyectsComponent />} />
          <Route path="/studies" element={<StudiesComponent />} />
          <Route path="/work" element={<WorkComponent />} />
          <Route path="/others" element={<OthersComponent />} />
          <Route path="/aboutme" element={<AboutMeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/tech" element={<TechnologiesComponent />} />
        </Routes>
        <FooterComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
