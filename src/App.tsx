import { BrowserRouter, Routes, Route } from "react-router-dom";
//page components
import MainPage from "@pages/index/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
