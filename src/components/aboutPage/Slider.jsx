import { useState } from "react";
import SliderArrow from "./SliderArrow";
import SliderContent from "./SliderContent";
import { useSelector } from "react-redux";

function Slider({ children, count, show }) {
  const [scrolled, setScrolled] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div
      className={`about-customers radius-1 ${isDarkMode ? "dark-3" : "white-3"}`}
      onMouseEnter={() => setShowArrows(() => true)}
      onMouseLeave={() => setShowArrows(() => false)}
      // 150 * show => giving use how many element to show; each element 150px width
      // show rem => for coulmn gap in the style
      style={{ width: `calc(${150 * show}px + ${show}rem)` }}
    >
      <SliderArrow
        direcation={"left"}
        action={() => setScrolled((val) => (val != 0 ? val - 1 : val))}
        showArrows={showArrows}
      />
      <SliderContent
        styling={{
          // The Second Condition To Make Sure When There Is One Element To Make (Fake Padding)
          left: `calc(${-166 * scrolled}px + ${show == 1 ? "0rem" : "0.5rem"})`,
        }}
      >
        {children}
      </SliderContent>
      <SliderArrow
        direcation={"right"}
        action={() =>
          setScrolled((val) => (val < count - show ? val + 1 : val))
        }
        showArrows={showArrows}
      />
    </div>
  );
}

export default Slider;
