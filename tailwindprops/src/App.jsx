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
      <Card username={"Ape"} snum={"300"} />
      <Card price={"2.3M"} snum={"301"} />
    </>
  );
}

export default App;
