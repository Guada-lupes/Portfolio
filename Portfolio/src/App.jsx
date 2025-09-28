import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HeaderComponent } from "./componentNew/HeaderComponent";
import { FooterComponent } from "./componentNew/FooterComponent";
import { IconosComponent } from "./componentNew/IconosComponent";
import { ScrollToTopComponents } from "./componentNew/ScrollToTopComponents";
import { ThemeProvider } from "./contex/ThemeProvider";

const AboutMeComponent = lazy(() => import("./componentNew/AboutMeComponent"));
const ProyectsComponent = lazy(() =>
  import("./componentNew/ProyectsComponent")
);
const StudiesComponent = lazy(() => import("./componentNew/StudiesComponent"));
const WorkComponent = lazy(() => import("./componentNew/WorkComponent"));
const OthersComponent = lazy(() => import("./componentNew/OthersComponent"));
const ContactComponent = lazy(() => import("./componentNew/ContactComponent"));
const TechnologiesComponent = lazy(() =>
  import("./componentNew/TechnologiesComponent")
);

function App() {
  return (
    <>
      <ThemeProvider>
        <HeaderComponent />
        <ScrollToTopComponents />
        <Suspense fallback={<div>Cargando</div>}>
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
        </Suspense>
        <FooterComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
