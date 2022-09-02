import React from "react";
import "./App.css";
import useInput from "./custom/useInput";
// import Input from "./components/Input";
// import { useActive } from "./custom/useActive";
const App = () => {
  // const active = useActive(1000);
  const name = useInput("Chiku");
  console.log("name", name);
  return (
    <div className="app">
      {/* <div className={active ? "active" : "inactive"}>
        {active ? "User is Active" : "User is Inactive"}
      </div> */}
      {/* <Input /> */}
      <input
        placeholder="Hello ji"
        value={name.value}
        onChange={name.onChange}
      />
    </div>
  );
};

export default App;
