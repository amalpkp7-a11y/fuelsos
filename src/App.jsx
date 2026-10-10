import Navbar from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import HowWork from "./components/howitworks/HowWork";
import Footer from "./components/footer/Footer";
import Why from "./components/why/Why";
import Services from "./components/services/Services";

import Pricing from "./components/pricing/Pricing"
import Faq from "./components/faQ/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <Why/>
      <HowWork/>
      <Services/>
      <Pricing/>
      <Faq/>


      <Footer/>
    
    </>
  );
}

export default App;