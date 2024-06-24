import Question from "pages/question";
import SignUp from "pages/signup";
import Splash from "pages/splash";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
