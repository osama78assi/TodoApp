function InputGroup({ children, label, labelFor, addLabel = true }) {
  return (
    <div className="input-group">
      {addLabel ? <label htmlFor={labelFor}>{label}</label> : null}
      {children}
    </div>
  );
}

export default InputGroup;
