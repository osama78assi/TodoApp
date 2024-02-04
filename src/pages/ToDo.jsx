import Nav from "../components/global/Nav";
import SwitchMode from "../components/global/SwitchMode";
import Landing from "../components/toDo/Landing";
import PageTitle from "../components/global/PageTitle";
import Footer from "../components/global/Footer";
import { Outlet } from "react-router-dom";

function ToDo() {
  return (
    <div className="todo">
      <Nav />
      <PageTitle text={"ToDo Application"} />
      <Landing />
      <SwitchMode />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ToDo;
