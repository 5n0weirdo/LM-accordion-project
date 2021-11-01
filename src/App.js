import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  const { id, title, info } = data;
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info"></section>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
