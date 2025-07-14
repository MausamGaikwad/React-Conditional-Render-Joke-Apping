import React from "react";

function Joke(props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Show question only if it exists */}
      {props.question && <h3>Q: {props.question}</h3>}

      {/* Show punchline only if 'showAnswer' is true */}
      {props.showAnswer && <p>A: {props.punchline}</p>}

      {/* If no question, just show punchline */}
      {!props.question && <p>{props.punchline}</p>}

      <hr />
    </div>
  );
}

export default Joke;
