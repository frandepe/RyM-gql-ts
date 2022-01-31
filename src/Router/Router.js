import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarTop from "../components/Navbar/Navbar";
import OutletCharacter from "../components/OutletCharacter/OutletCharacter";
import Character from "../pages/Character/Character";
import Characters from "../pages/Characters/Characters";
import Episodes from "../pages/Episodes/Episodes";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTop />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characterbyname" element={<Character />}>
            <Route path=":id" element={<OutletCharacter />} />
          </Route>
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
