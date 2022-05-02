import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <div className="grid grid-rows-[10%_90%] grid-cols-1 h-screen">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
