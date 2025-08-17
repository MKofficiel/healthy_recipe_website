import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutHero from "../sections/AboutHero";
import CallToAction from "../sections/CallToAction";
import MissionStatement from "../sections/MissionStatement";
import OurPhilosophy from "../sections/OurPhilosophy";
import Why from "../sections/Why";

function About() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Why />
      <OurPhilosophy />
      <MissionStatement />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default About;
