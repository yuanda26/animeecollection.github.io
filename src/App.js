import { Routes, Route, Navigate } from "react-router-dom";
import { AnimePages, AnimeDetailPages, CollectionPages, CollectionDetailPages } from "./pages";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<AnimePages />} />
                <Route path="/anime" element={<AnimePages />} />
                <Route path="/anime/:id" element={<AnimeDetailPages />} />
                <Route path="/collection" element={<CollectionPages />} />
                <Route path="/collection/:id" element={<CollectionDetailPages />} />

                <Route path="/404" element={<div>Page Not Found</div>} />
                <Route path="*" element={<Navigate replace to="/anime" />} />
            </Routes>
        </div>
    );
}

export default App;
