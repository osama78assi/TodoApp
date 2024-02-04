import Nav from "../components/global/Nav";
import PageTitle from "../components/global/PageTitle";
import Landing from "../components/aboutPage/Landing";
import RateUs from "../components/aboutPage/RateUs";
import Footer from "../components/global/Footer";
import SwitchMode from "../components/global/SwitchMode";

function About() {
  return (
    <div className="about">
      <Nav />
      <PageTitle text={"Welcome To About Page"} />
      <Landing />
      <RateUs />
      <SwitchMode />
      <Footer />
    </div>
  );
}

export default About;
