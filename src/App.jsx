import { lazy, Suspense } from "react";
import Nav from "./navBar/Nav";

const Home = lazy(() => import("./layout/Home"));
const Services = lazy(() => import("./layout/Services"));
const AboutMe = lazy(() => import("./layout/AboutMe"));
const MySkills = lazy(() => import("./layout/MySkills"));
const Projects = lazy(() => import("./layout/Projects"));
const Footer = lazy(() => import("./layout/Footer"));

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<span id="first-loader"></span>}>
        <main>
          <Home />
          <Services />
          <AboutMe />
          <MySkills />
          <Projects />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
