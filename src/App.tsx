import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

//page components
import MainPage from "@pages/index/index";
import BookmarkPage from "@pages/bookmark/index";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/search/:id" element={<MainPage />}></Route>
          <Route path="/bookmark" element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
