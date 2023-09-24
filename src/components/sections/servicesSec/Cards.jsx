import { MdNearbyError as ThirdIcn } from "react-icons/md";
import { HiSquare3Stack3D as SecondIcn } from "react-icons/hi2";
import { HiCode as FirstIcn } from "react-icons/hi";

const Cards = () => {
  return (
    <>
      <div className="services__cardCont__card" aria-label="Card container 1">
        <button>
          {" "}
          <FirstIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h3>Front End Web Development</h3>
          <p>
            Transform design into a real website.Also if you don’t have a pre
            made design we can made it.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="services__cardCont__card" aria-label="Card container 2">
        <button>
          {" "}
          <SecondIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h3>Full Stack Web Development</h3>
          <p>
            Do you want a powerful website?This service has both front-end and
            back-end with Firebase.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="services__cardCont__card" aria-label="Card container 3">
        <button>
          {" "}
          <ThirdIcn />
        </button>
        <div
          className="services__cardCont__card__right"
          aria-label="Card text and btn group"
        >
          <h3>Web Udate or Error Fixing Service</h3>
          <p>
            Do you want a new update on your web?
            {window.innerWidth < 1200
              ? `Or do you have something going
            wrong on your code?Contact us.`
              : `Or is your code working not how you want work?`}
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
