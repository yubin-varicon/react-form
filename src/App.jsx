import { Routes, Route } from "react-router-dom";
import { Login, Signup, PageNotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
