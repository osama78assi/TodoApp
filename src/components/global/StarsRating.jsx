import { useState } from "react";
import Star from "./Star";

function StarsRating({
  onRate,
  prevent = false,
  maxRate = 5,
  filled = 0,
  width = "20px",
  height = "20px",
  color = "#FFC107",
  id = "",
}) {
  const starStyle = {
    width,
    height,
    display: "block",
    cursor: prevent ? "default" : "pointer",
    color,
  };

  const [rated, setRated] = useState(filled);
  const [tempRate, setTempRate] = useState(0);

  function handelRating(rate) {
    setRated(rate);
    onRate && onRate(rate);
  }

  return (
    <div className="stars" id={id}>
      {Array.from({ length: maxRate }, (_, i) => (
        <Star
          full={tempRate ? i + 1 <= tempRate : i + 1 <= rated}
          starStyle={starStyle}
          color={color}
          onRateIn={() => setRated((prev) => (prev == i + 1 ? 0 : i + 1))}
          onHoverIn={() => setTempRate(i + 1)}
          onHoverOut={() => setTempRate(0)}
          key={`star-${i}`}
          prevent={prevent}
        />
      ))}
    </div>
  );
}

export default StarsRating;
