import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

//page components
import MainPage from "@pages/index/index";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
