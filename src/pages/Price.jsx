import Nav from "../components/global/Nav";
import Landing from "../components/pricePage/Landing";
import Footer from "../components/global/Footer";
import SwitchMode from "../components/global/SwitchMode";

function Price() {
  return (
    <div className="price">
      <Nav />
      <Landing />
      <SwitchMode />
      <Footer />
    </div>
  );
}

export default Price;
