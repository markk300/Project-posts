import  { useEffect } from "react";
import "./App.css";
const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  },[]);
  return (
    <div>
      <h1 className="heading__one">React application!!!</h1>
    </div>
  );
};

export default App;
