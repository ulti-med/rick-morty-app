import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./pages/characters/Characters";
import { Layout } from "./layout";
import { CharacterPage } from "./pages/character-page/CharacterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/character/:characterId" element={<CharacterPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
