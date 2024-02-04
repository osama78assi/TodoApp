function DateContainer({ date }) {
  let displayedDate = "";
  const now = new Intl.DateTimeFormat("en-UK").format(new Date()).toString();

  if (now == date) displayedDate = "today";
  else displayedDate = date;

  return (
    <span
      className="date"
      onClick={() => {
        console.log(now);
        console.log(displayedDate);
      }}
    >
      {displayedDate}
    </span>
  );
}

export default DateContainer;
