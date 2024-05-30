import { Route, Routes } from "react-router-dom";

import "@/App.css";
import { LogIn, SignUp, Home, Explore } from "@/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
