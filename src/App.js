import { Routes, Route } from "react-router-dom";
import { AnimePages, AnimeDetailPages, CollectionPages, CollectionDetailPages } from "./pages";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<AnimePages />} />
                <Route path="/:id" element={<AnimeDetailPages />} />
                <Route path="/collection" element={<CollectionPages />} />
                <Route path="/collection/:id" element={<CollectionDetailPages />} />
            </Routes>
        </div>
    );
}

export default App;
