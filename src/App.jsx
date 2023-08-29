import Nav from "./navBar/Nav";
import Home from "./layout/Home";
import Services from "./layout/Services";
import AboutMe from "./layout/AboutMe";
import MySkills from "./layout/MySkills";
import Projects from "./layout/Projects";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Home />
        <Services />
        <AboutMe />
        <MySkills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
