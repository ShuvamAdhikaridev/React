import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "Shuvam";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "blank",
  },

  "Click me to Visit Google"
);

createRoot(document.getElementById("root")).render(reactElement);
