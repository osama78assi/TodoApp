import Footer from "../components/global/Footer";
import Nav from "../components/global/Nav";
import PageTitle from "../components/global/PageTitle";
import Landing from "../components/homePage/Landing";
import SwitchMode from "../components/global/SwitchMode";
function Home() {
  return (
    <div className="home">
      <Nav />
      <PageTitle text={"Welcome To The ToDo App"} />
      <Landing />
      <SwitchMode />
      <Footer />
    </div>
  );
}

export default Home;
