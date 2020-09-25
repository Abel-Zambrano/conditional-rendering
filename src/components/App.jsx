import React from "react";
import Login from "./Login";

const isLoggedIn = true;
const time = new Date().getHours();

// Ternerary Operator
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {time > 12 && <h1>Good Afternoon!</h1>}
    </div>
  );
}

export default App;