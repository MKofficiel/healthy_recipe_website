import Footer from "../components/Footer";
import Header from "../components/Header";
import CallToAction from "../sections/CallToAction";
import Hero from "../sections/Hero";
import RealLifeSection from "../sections/RealLifeSection";
import WhatYouGet from "../sections/WhatYouGet";

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatYouGet />
      <RealLifeSection />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default Home;
