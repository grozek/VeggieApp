// src/index.js

const { useState, useEffect } = React;

// Define the App component
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));