import { useSelector } from "react-redux";
import { getRandomId } from "../../helper";
import { useState } from "react";

const colors = [
  {
    id: getRandomId(),
    class: "default",
  },
  {
    id: getRandomId(),
    class: "blue-item-1",
  },
  {
    id: getRandomId(),
    class: "blue-item-2",
  },
  {
    id: getRandomId(),
    class: "blue-item-3",
  },
  {
    id: getRandomId(),
    class: "red-item-1",
  },
  {
    id: getRandomId(),
    class: "red-item-2",
  },
  {
    id: getRandomId(),
    class: "orange-item-1",
  },
  {
    id: getRandomId(),
    class: "orange-item-2",
  },
  {
    id: getRandomId(),
    class: "yellow-item-1",
  },
  {
    id: getRandomId(),
    class: "yellow-item-2",
  },
  {
    id: getRandomId(),
    class: "pink-item-1",
  },
  {
    id: getRandomId(),
    class: "purple-item-1",
  },
  {
    id: getRandomId(),
    class: "green-item-1",
  },
];

function ColorPalette({ getColor, label, value="default" }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [selectedColor, setSelectedColor] = useState(value);

  function handelClickColor(selected) {
    getColor && getColor(selected);
    setSelectedColor(selected);
  }

  return (
    <div className="color-palette">
      <p className="color-label">{label}</p>
      <div className="colors">
        {colors.map((color) => (
          <span
            key={color.id}
            onClick={() => handelClickColor(color.class)}
            className={`color ${color.class} ${
              isDarkMode ? "border-white" : "border-dark"
            } ${selectedColor == color.class ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
