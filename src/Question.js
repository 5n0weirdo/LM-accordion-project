import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import walkers from "./img/walkers.jpg";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  let snow = "❄️";
  let dragon = "🐉";
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default Question;
