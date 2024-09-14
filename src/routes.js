import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu"
import Rodape from "Componentes/Rodape";
import Layout from "Paginas/Layout"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/sobremim" element={<SobreMim />}></Route>
        </Route>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;