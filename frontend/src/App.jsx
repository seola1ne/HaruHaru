import Profile from "pages/profile";
import Question from "pages/question";
import SignUp from "pages/signup";
import Splash from "pages/splash";
import Storage from "pages/storage";
import Talk from "pages/talk";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/question" element={<Question />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
