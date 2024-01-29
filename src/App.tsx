import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
