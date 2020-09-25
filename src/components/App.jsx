import React from "react";
import Login from "./Login";

const isRegistered = false;


// Ternerary Operator
function App() {
  return (
    <div className="container">
      <Login registered={isRegistered} />
    </div>
  );
}

// const time = new Date().getHours();
// {time > 12 && <h1>Good Afternoon!</h1>}

export default App;