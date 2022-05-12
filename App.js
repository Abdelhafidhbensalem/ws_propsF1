import './App.css';
import React from "react";
import ListReceipes from './Components/ListReceipes/ListReceipes.js';
import { recipes } from './data'

function App() {
function getName(x) {
  alert(x)
}
  return (
    <div className="App">
<ListReceipes recipes={recipes} getName={getName}/>
    </div>

  );
}

export default App;

