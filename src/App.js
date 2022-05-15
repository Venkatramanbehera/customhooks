import React from "react";
import "./App.css";
import { useActive } from "./custom/useActive";
const App = () => {
  const active = useActive(1000);
  return (
    <div className="app">
      <div className={active ? "active" : "inactive"}>
        {active ? "User is Active" : "User is Inactive"}
      </div>
    </div>
  );
};

export default App;
