import Registration_form from "./components/Register_form";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main_Site_Page from "./components/Main_Page";
import Clues_page from "./components/Clues_page";
import Login_form from "./components/Login_page";
import Admin_clue_auth from "./components/admin_clue_provider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main_Site_Page />} />
          <Route exact path="/clues_panel" element={<Clues_page />} />
          <Route exact path="/login" element={<Login_form/>}/>

          <Route exact path="/register" element={<Registration_form />} />
          <Route exact path="/admin_clue_auth" element={<Admin_clue_auth />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
