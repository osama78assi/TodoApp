import StarsRating from "../global/StarsRating";
import PageTitle from "../global/PageTitle";
import InputGroup from "../global/InputGroup";
import Input from "../global/Input";
import { useSelector } from "react-redux";

function RateUs() {
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div className={`layout pd-y-2 ${isDarkMode ? "dark-3" : "white-3"}`}>
      <PageTitle text={"Rate Us"} type={3} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`container radius-1 pd-1 ${
          isDarkMode ? "dark-1" : "white-1"
        }`}
      >
        <InputGroup label="Your Name" labelFor="name">
          <Input id="name" name="name" type="text" val="" onType={() => {}} />
        </InputGroup>
        <InputGroup labelFor="desc" label="Enter Description">
          <textarea
            name="details"
            cols="20"
            rows="10"
            value={""}
            onChange={() => {}}
            id={"desc"}
          ></textarea>
        </InputGroup>
        <InputGroup label="Rate" labelFor="rate">
          <StarsRating
            maxRate={5}
            width="30px"
            height="30px"
            id="rate"
            color="#3282b8"
          />
        </InputGroup>
        <input type="submit" value={"Rate"} />
      </form>
    </div>
  );
}

export default RateUs;
