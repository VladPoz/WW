import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Catalog from "./components/Catalog.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </BrowserRouter>
    )
}