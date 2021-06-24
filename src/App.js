import React, { useState } from "react";
import { message } from "statuses";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hey", "What up!"]);

  console.log(input);
  console.log(messages);

  const sendMessages = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Clever Programming 🚀🚀</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={sendMessages}>Send Messages</button>
      </form>

      {/* Input Fields*/}
      {/*Button*/}

      {/*Messages themselves*/}

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
