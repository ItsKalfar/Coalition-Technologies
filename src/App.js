import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";
import HistorySection from "./components/HistorySection";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";

function App() {
  const mountains = ["Mountain 1", "Mountain 2"];
  const [active, setActive] = useState(mountains[0]);
  const handleClick = (mountain) => {
    setActive(mountain);
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <HistorySection />
        <div className="container">
          <SectionHeading
            number={"02."}
            heading={"climb"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem autem omnis illum modi consequuntur optio qui non, voluptatem ratione."
            }
            direction={true}
          />
        </div>
        <div className="mountain">
          <div className="mountain-container">
            <ul>
              {mountains.map((mountain) => (
                <li
                  key={mountain}
                  className={active === mountain ? "active" : ""}
                  onClick={() => handleClick(mountain)}
                >
                  {mountain}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
