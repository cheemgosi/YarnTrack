import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Inventory from "./pages/inventory.jsx";
import Header from './components/header.jsx'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="inv" element={<Inventory />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
