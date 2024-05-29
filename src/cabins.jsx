import React from "react";
import "./cabins.css";

const cabins = [
  { name: "Cabin 1", image: "/cabin1.jpg" },
  { name: "Cabin 2", image: "/cabin2.jpg" },
  { name: "Cabin 3", image: "/cabin3.jpg" },
  { name: "Cabin 4", image: "/cabin4.jpg" },
  { name: "Cabin 5", image: "/cabin5.jpg" },
  { name: "Cabin 6", image: "/cabin6.jpg" },
  { name: "Cabin 7", image: "/cabin7.jpg" },
  { name: "Cabin 8", image: "/cabin8.jpg" },
  { name: "Cabin 9", image: "/cabin9.jpg" },
  { name: "Cabin 10", image: "/cabin10.jpg" },
  { name: "Cabin 11", image: "/cabin11.jpg" },
  { name: "Cabin 12", image: "/cabin12.jpg" },
  { name: "Cabin 13", image: "/cabin13.png" },
  { name: "Cabin 14", image: "/cabin14.jpg" },
  { name: "Cabin 15", image: "/cabin15.jpg" },
  { name: "Cabin 16", image: "/cabin16.jpg" },
  { name: "Cabin 17", image: "/cabin17.jpg" },
  { name: "Cabin 18", image: "/cabin18.png" },
  { name: "Cabin 19", image: "/cabin19.png" },
  { name: "Cabin 20", image: "/cabin20.jpg" },
];

const Cabins = ({ onSelect }) => {
  return (
    <div className="cabins">
      {cabins.map((cabin, index) => (
        <div key={index} className="cabin" onClick={() => onSelect(cabin.name)}>
          <img src={cabin.image} alt={cabin.name} />
          <p>{cabin.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cabins;
