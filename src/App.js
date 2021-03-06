import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyles from "./glabalStyle";
import React, {useState} from 'react'
import DropDown from "./components/DropDown";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import Footer from "./components/Footer";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
