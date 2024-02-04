import { useEffect, useState } from "react";
import Profile from "./Profile";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import { getRandomId } from "../../helper";

function handleSliderElements() {
  // Depending On The Width Of The Viewport THe Element Will Be Rendered
  if (window.innerWidth >= 1200) {
    return 7;
  } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    return 5;
  } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
    return 4;
  } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
    return 2;
  } else if (window.innerWidth < 576) {
    return 1;
  }
}

const sliderData = [
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=54",
    name: "Ahmad Hamood",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 4,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=1",
    name: "Lily Shams",
    job: "Progammer",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 5,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=67",
    name: "Ahmad Limon",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 5,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=48",
    name: "Lamar Lila",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 3,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=33",
    name: "Khaled Khal",
    job: "Web Developer",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations I Advice You To Givt It A Try, And Yeah You Can Check The Free Edition",
    stars: 5,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=18",
    name: "Khalil Salam",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 4,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=23",
    name: "Lama Lamia",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 4,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=16",
    name: "Lila Lole",
    job: "Programmer",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 4,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=5",
    name: "Lamis Lamas",
    job: "Accounter",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 5,
  },
  {
    id: getRandomId(),
    img: "https://i.pravatar.cc?img=8",
    name: "Abod Lamira",
    job: "HR",
    review:
      "I Rellay Like This App It Helped Me A Lot To Adjust My Wrok And My Vacations ",
    stars: 5,
  },
];

function Landing() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [sliderElement, setSliderElement] = useState(handleSliderElements);

  useEffect(() => {
    function handler() {
      setSliderElement(handleSliderElements());
    }
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div className={`layout ${isDarkMode ? "dark-4 " : "white-4 "} pd-b-2`}>
      <main className="about-main">
        <h2>What Did They Think</h2>
        <Slider count={sliderData.length} show={sliderElement}>
          {sliderData.map((details) => (
            <Profile key={details.id} details={details} prevent={true} />
          ))}
        </Slider>
      </main>
    </div>
  );
}

export default Landing;
