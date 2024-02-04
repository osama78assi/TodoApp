import { useSelector } from "react-redux";

function EditImg() {
  const isDarkMode = useSelector((state) => state.mode.dark);

  return isDarkMode ? (
    <svg
      id="changeColor"
      fill="#DC7633"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="90"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.9999"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>&lt;</defs>
      <g></g>
      <g></g>
      <g clipPath="url(#id3)"></g>
      <g clipPath="url(#id4)"></g>
      <g id="inner-icon" transform="translate(85, 75)">
        <svg
          width="250"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="IconChangeColor"
        >
          <path
            d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="mainIconPathAttribute"
            strokeWidth="1"
            fill="#000000"
          ></path>
        </svg>
      </g>
    </svg>
  ) : (
    <svg
      id="changeColor"
      fill="#DC7633"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.9999"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>&lt;</defs>
      <g></g>
      <g></g>
      <g clipPath="url(#id3)"></g>
      <g clipPath="url(#id4)"></g>
      <g id="inner-icon" transform="translate(85, 75)">
        <svg
          width="250"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="IconChangeColor"
        >
          <path
            d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="mainIconPathAttribute"
            strokeWidth="1"
            fill="#ffffff"
          ></path>
        </svg>
      </g>
    </svg>
  );
}

export default EditImg;
