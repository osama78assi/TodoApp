function StartBtn({ onAction, text}) {
  return (
    <button className="btn pd-y-1 pd-x-2 radius-1" onClick={() => onAction && onAction()}>
      {text}
    </button>
  );
}

export default StartBtn;
