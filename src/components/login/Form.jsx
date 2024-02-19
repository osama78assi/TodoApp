import { useSelector } from "react-redux";
import Input from "../global/Input";
import InputGroup from "../global/InputGroup";
import PageTitle from "../global/PageTitle";

function Form() {
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div className={`layout pd-y-2 ${isDarkMode ? "dark-3" : "white-3"}`}>
      <PageTitle
        text={"Fill The Form And Join Us"}
        type={3}
        classes={"pd-y-1"}
      />
      <div className="row container">
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`pd-1 ${
            isDarkMode ? "dark-1" : "white-1"
          } col-ty-12 col-sm-12 col-6`}
        >
          <InputGroup label="Your userName" labelFor="name">
            <Input id="name" name="name" type="text" val="" onType={() => {}} />
          </InputGroup>
          <InputGroup labelFor="pass" label="Your Password">
            <Input
              id="pass"
              name="pass"
              type="password"
              val=""
              onType={() => {}}
            />
          </InputGroup>
          <input type="submit" value={"Login"} />
        </form>

        <div className="img col-6">
          <img
            src="/public/toDo.png"
            alt="normall Image"
            className={`${isDarkMode ? "dark-1" : "white-1"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
