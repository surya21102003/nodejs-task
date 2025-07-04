
import { useState } from "react";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h1>Products App</h1>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Home />
        </>
      ) : (
        <AuthPage onAuth={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;
