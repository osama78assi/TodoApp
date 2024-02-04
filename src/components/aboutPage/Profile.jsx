import { useSelector } from "react-redux";
import StarsRating from "../global/StarsRating";

function Profile({ details, prevent }) {
  const isDarkMode = useSelector((state) => state.mode.dark);

  const { img, name, job, review, stars } = details;
  return (
    <div className={`profile ${isDarkMode ? "dark-1" : "white-1"}`}>
      <header className="profile-header">
        <img src={img} alt="profile image" />
        <div>
          <strong>{name}</strong>
          <p>{job}</p>
        </div>
      </header>
      <main className="profile-body">
        <p>{review}</p>
        <StarsRating maxRate={5} filled={stars} prevent={prevent} />
      </main>
    </div>
  );
}

export default Profile;
