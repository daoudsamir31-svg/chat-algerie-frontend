import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {

  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {

  return (
    <HashRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Home />} />

        </Route>


        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </HashRouter>
  );
}


export default App;