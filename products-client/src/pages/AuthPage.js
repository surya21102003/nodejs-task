
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = ({ onAuth }) => {
  const [mode, setMode] = useState("login");

  return (
    <div>
      {mode === "login" ? <Login onLogin={onAuth} /> : <Signup onSignup={onAuth} />}
      <button style={{marginTop:10}} onClick={() => setMode(mode === "login" ? "signup" : "login")}>
        Switch to {mode === "login" ? "Signup" : "Login"}
      </button>
    </div>
  );
};

export default AuthPage;
