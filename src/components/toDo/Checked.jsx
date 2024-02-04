function Checked({ onCheck, check = false }) {
  function handleClick() {
    onCheck && onCheck(!check);
  }

  return (
    <span
      className="custom-checkbox"
      onClick={() => (check == null ? "" : handleClick())}
    >
      {check ? "✔" : ""}
    </span>
  );
}

export default Checked;
