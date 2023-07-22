import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./UI/components/NavBar";

import Home from "./pages/Home";
import Contato from "./pages/contato";
import Projetos from "./pages/projetos";
import Sobre from "./pages/sobre";
import Footer from "./UI/components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contato"
          element={<Contato />}
        />
        <Route
          path="/projetos"
          element={<Projetos />}
        />
        <Route
          path="/sobre"
          element={<Sobre />}
        />
      </Routes>
    </Router>
  );
}

export default App;
