function SliderArrow({ direcation, action, showArrows }) {
  return (
    <span
      className={`arrow ${direcation} ${showArrows ? "" : "hidden"}`}
      onClick={action}
    >
      {direcation == "left" ? "<" : ">"}
    </span>
  );
}

export default SliderArrow;
