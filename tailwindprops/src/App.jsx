import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Shuvam",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-red-400">Tailwind Test</h1>
      <Card channel="Chai aur code" msomeObj={myObj} />
      <Card />
    </>
  );
}

export default App;
