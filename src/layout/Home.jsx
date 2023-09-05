import { HiArrowNarrowDown as ArrIcn } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home" aria-label="Home section container" data-observer>
      <section
        className="home__text-group"
        aria-label="Home section text and btn group"
      >
        <h1>
          Hey, I'm <span>Florian Dollani</span>,<br /> a freelance web developer
        </h1>
        <p>
          Do you want a web for your business?Or do you want a web for youself?
          I think you are on the right place!
        </p>
        <button>Hire Me</button>
      </section>
      <img src="" alt="Photo of the person" />
      <h3>
        Scroll Down <ArrIcn />
      </h3>
    </section>
  );
};

export default Home;
