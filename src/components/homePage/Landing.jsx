import { useState } from "react";
import Section from "./Section";
import StartBtn from "./StartBtn";
import PageTitle from "../global/PageTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Array Of Details For Sections
const details = [
  {
    id: "1-d-1",
    title: "Schedule Your Tasks",
    altImage: "Home image",
    imgUrl: "/public/home-1.avif",
    text: `
    You Can Adjust Everything In Your Day,
    Your Time Is Precious Go And Safe It By
    Schedule Your Daily Tasks, Effective And Makes You Productive More And More,
    Subscribe With Us Now...`,
    order: 1,
  },
  {
    id: "1-d-2",
    title: "Easy To Use",
    altImage: "Home image",
    imgUrl: "/public/home-2.avif",
    text: `You Can Use Our Application Easily With Our Simply User
    Interface With Alot Of Options, And You Can Use It Anywhere `,
    order: 2,
  },
  {
    id: "1-d-3",
    title: "Grouping Is Available",
    altImage: "Home image",
    imgUrl: "/public/home-3.jpg",
    text: "You Can Specify Tasks For Your Work Days And Other For Your Vacations...",
    order: 1,
  },
];

function Landing() {
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div className={`layout ${isDarkMode ? "dark-4 " : "white-4 "} pd-b-2`}>
      <main className={`home-main pd-y-3 row container`}>
        {details.map((sec) => (
          <Section details={sec} key={sec.id} />
        ))}
      </main>
      <Link to={"app"}>
        <StartBtn text={"Let's Start"} />
      </Link>
    </div>
  );
}

export default Landing;
