import { useState } from "react";
import PageTitle from "../global/PageTitle";
import Card from "./Card";
import { useSelector } from "react-redux";

// Array Of Details For Cards

const details = [
  {
    id: "1-c-1",
    title: "Free",
    features: [
      "Just 5 Groups",
      "Each Group 10 Tasks",
      "5 colors Available",
      "There Is Ads",
    ],
    price: "0.00$",
    imgUrl: "/public/card-free.png",
    imgAlt: "free",
  },
  {
    id: "1-c-2",
    title: "Pro",
    features: [
      "Infinity Groups",
      "Infinity Tasks For Group",
      "All Colors Available",
      "No Ads",
    ],
    price: "0.99$",
    imgUrl: "/public/card-pay.png",
    imgAlt: "pay",
  },
];

function Landing() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  return (
    <div className={`layout ${isDarkMode ? "dark-4" : "white-4"}`}>
      <PageTitle text={"Welcome To Price Page"} />
      <main className="row container price-main pd-y-2">
        {details.map((card) => <Card key={card.id} details={card} />)}
      </main>
    </div>
  );
}

export default Landing;
