import Hero from "../components/Hero";
import Whyyou from "../components/Whyyou";
import Howit from "../components/Howit";
import Fotter from "../components/Fotter";
import About from "../components/About";

const Landing = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Whyyou />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Howit />
      </div>
      <div>
        <Fotter />
      </div>
    </div>
  );
};
export default Landing;
