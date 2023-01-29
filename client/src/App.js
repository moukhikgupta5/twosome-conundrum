import Registration_form from "./components/Register_form";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main_Site_Page from "./components/Main_Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main_Site_Page />} />

          <Route exact path="/register" element={<Registration_form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
