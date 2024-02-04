function Input({
  name,
  id,
  type,
  placeholder,
  val,
  onType,
  dis,
  refEle,
  classN = "",
}) {
  return (
    <input
      className={`input ${classN != "" ? classN : ""}`}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={(e) =>
        type != "number" ? onType(e.target.value) : onType(+e.target.value)
      }
      onKeyDown={(e) =>
        e.code === "Enter" ? e.preventDefault() : ""
      }
      disabled={dis}
      ref={refEle}
    ></input>
  );
}

export default Input;
