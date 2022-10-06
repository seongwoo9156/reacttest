import "./App.css";
import { useState } from "react";

function App() {
  const [list, setlist] = useState(["신나는시험시간", "리액트열심히배우기"]);
  const [input, setinput] = useState("");

  const inputChange = (e) => {
    setinput(e.target.value);
  };
  console.log(input);

  const addlist = () => {
    setlist((list) => {
      return [input, ...list];
    });
    setinput("");
  };

  return (
    <div className="contatiner">
      <div className="inputBox">
        <input type="text" value={input} onChange={inputChange} />
        <button onClick={addlist}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="list">
        <ul>
          {list.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
