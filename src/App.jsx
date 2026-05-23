import { useState } from "react";
function App() {
  const [text,setText] = useState("hello world junirour developer");
  const changText=()=>{
    setText("Hello World Hero");
  };
  return (
    <div>
      <div id="text">{text}</div>
      <button  onClick={changText}>Click Me</button>
    </div>
  );
}

export default App;