import { Route, Routes,Link } from "react-router-dom"
import Kortele   from "./Uzdotis/Hooks_2_praktika";
import Slepines from "./Uzdotis/Hooks_3_praktika";
import Praktikaform from "./Uzdotis/Hooks_5_praktika_įvedimo_laukelis/Sarasas";
import Data from "./Uzdotis/Hooks_6_praktika/Data";
import Coment_Data from "./Uzdotis/Hooks_7_praktika/Coment_Data";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" class="nav-link" >Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/Hooks_2_praktika" class="nav-link">Kortele</Link>
        </li>
        <li class="nav-item">
        <Link to="/Hooks_3_praktika" class="nav-link">Slepines</Link>     
        </li>
        <li class="nav-item">
        <Link to="/Hooks_5_praktika_įvedimo_laukelis/Sarasas" class="nav-link">sarasas</Link>     
        </li>
        <li class="nav-item">
        <Link to="/Hooks_6_praktika/Data" class="nav-link">Listas</Link>     
        </li>
        <li class="nav-item">
        <Link to="/Hooks_7_praktika/Coment_Data" class="nav-link">Coment</Link>     
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/Hooks_2_praktika" element={<Kortele />} />
        <Route path="/Hooks_3_praktika" element={<Slepines />} />
        <Route path="/Hooks_5_praktika_įvedimo_laukelis/Sarasas" element={<Praktikaform />} />
        <Route path="/Hooks_6_praktika/Data" element={<Data />} />
        <Route path="/Hooks_7_praktika/Coment_Data" element={<Coment_Data />} />
      </Routes>
      </div>
  );
}

export default App;
