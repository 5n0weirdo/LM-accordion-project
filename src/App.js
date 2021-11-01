import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
import war from "./img/war.jpg";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  const [questions, setQuestions] = useState(data);
  let snow = "❄️";
  let dragon = "🐉";
  return (
    <main style={{ backgroundImage: `url(${war})` }}>
      <div className="container">
        <h3>
          <center>
            {snow}Questions and Answers about Game of Thrones{dragon}
          </center>
          <div className="underline"></div>
        </h3>
        <section className="info"></section>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
      <footer>
        <FaGithubSquare />
      </footer>
    </main>
  );
}

export default App;
