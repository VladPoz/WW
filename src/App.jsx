import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog.jsx";
import {Contact} from "./pages/Contact.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}