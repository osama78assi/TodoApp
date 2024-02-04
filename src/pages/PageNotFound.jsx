import { Link, useParams } from "react-router-dom";
import Nav from "../components/global/Nav";
import { useSelector } from "react-redux";

function PageNotFound() {
  const pageName = useParams();
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div className={`notFound ${isDarkMode ? "dark-3" : "white-3"}`}>
      <Nav />
      <div className="inner">
        <h1>
          There Is No Page Called {pageName["*"]},{" "}
          <Link to={"/"} replace={true}>
            <span>Return Home</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default PageNotFound;
