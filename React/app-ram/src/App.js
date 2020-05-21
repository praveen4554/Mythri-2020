import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickComponent";
import { HoverCounter } from "./HoverComponent";

function App() {
  return (
    <div className="App">
      <Counter
        render={(counter, incrementCount, decrementCount) => (
          <ClickCounter
            counter={counter}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      ></Counter>
      <Counter
        render={(counter, incrementCount, decrementCount) => (
          <HoverCounter
            counter={counter}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      ></Counter>
    </div>
  );
}

export default App;
