import React, { useState } from "react";
import Joke from "./Joke";
import "./App.css";

function App() {
  // State to toggle answers visibility
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Joke App</h1>
      <button onClick={toggleAnswers}>
        {showAnswers ? "Hide" : "Show"} Answers
      </button>

      <Joke
        question="Why did the scarecrow win an award?"
        punchline="Because he was outstanding in his field!"
        showAnswer={showAnswers}
      />
      <Joke
        question="Why don’t scientists trust atoms?"
        punchline="Because they make up everything!"
        showAnswer={showAnswers}
      />
      <Joke
        punchline="I told my wife she was drawing her eyebrows too high. She looked surprised."
        showAnswer={showAnswers}
      />
    </div>
  );
}

export default App;
