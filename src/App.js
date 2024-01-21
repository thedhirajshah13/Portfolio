import "./App.css";
import Home from "./Pages/Home";
import PageEnd from "./Pages/PageEnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <PageEnd/>

      </BrowserRouter>
    </div>
  );
}

export default App;

// the complimenting colour colour
// #05386B
// text colour shadow
// #379683
// background colour
// #5CDB95
// text colour
//
