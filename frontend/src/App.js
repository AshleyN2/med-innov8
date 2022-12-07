import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

import "./App.css"

function App() {
  return <div className="App"></div>
}

export default App

/*
function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from Med-Innov8!</h1>;
}

export default App;
*/