import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import MainLayoutRoutes from "./routes/MainLayoutRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<MainLayoutRoutes />} />
      </Routes>
    </>
  );
}

export default App;
