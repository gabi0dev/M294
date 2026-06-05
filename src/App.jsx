import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import AddGamePage from "./pages/AddGamePage";
import EditGamePage from "./pages/EditGamePage";





function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/neu" element={<AddGamePage />} />
          <Route path="/spiele/:id/bearbeiten" element={<EditGamePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
