import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./pages/characters/Characters";
import { Layout } from "./layout";
import { CharacterPage } from "./pages/character-page/CharacterPage";
import { NotFound } from "./pages/not-found-page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:characterId" element={<CharacterPage />} />
          <Route path="/error" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
