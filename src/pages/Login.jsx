import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";
import Form from "../components/login/Form";
import SwitchMode from "../components/global/SwitchMode";

function Login() {
  return (
    <div className="login">
      <Nav />
      <Form />
      <SwitchMode />
      <Footer />
    </div>
  );
}

export default Login;
