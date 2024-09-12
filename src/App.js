import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPageImport from './Pages/AllPageImport/AllPageImport';
import Contactus from './Component/Contactus/Contactus';
import Open from "./Component/Open/open/Open"
import ModernSupplySolutions from './Pages/Solutions/Services/ModernSupplySolutions/ModernSupplySolutions';
import Parallex from './Component/Parallex/Parallex';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPageImport />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Open" element={<Open />} />
        <Route path="/ModernSupplySolutions" element={<ModernSupplySolutions/>} />
        <Route path="/Parallex" element={<Parallex/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
