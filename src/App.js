import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Qazi", text: "yoo" },
    { username: "sonny", text: "message" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("please enter your username"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Clever Programming 🚀🚀</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Send Messages...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            {" "}
            send Messages{" "}
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
