import React from "react";
import "./App.css";
import { Dashboard as DashboardView } from "./views";

function App() {
  return (
    <div className="App">
      <header>
        <DashboardView></DashboardView>
      </header>
    </div>
  );
}

export default App;
