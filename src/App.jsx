//import React from "react";
import Header from "./components/Header.jsx";
//import CoreConcept from "./components/CoreConcept.jsx";
//import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
//import TabButton from "./components/TabButton.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
