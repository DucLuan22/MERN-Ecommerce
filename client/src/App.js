import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import MainLayoutRoutes from "./routes/MainLayoutRoutes";
import AdminLayout from "./routes/AdminLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<MainLayoutRoutes />} />
      </Routes>
    </>
  );
}

export default App;
