import React from "react";

const isLoggedIn = true;

function renderCondition() {
  if(isLoggedIn === true) {
    return <h1>Hello</h1>
  } else {
    return(
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return (
    <div className="container">
      {renderCondition()}
    </div>
  );
}

export default App;
