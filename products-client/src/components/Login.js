
import { useState } from "react";
import API from "../api";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/login", form);
    localStorage.setItem("token", data.token);
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"float",}}>
      <div>
      <input style={{marginTop:10}} required placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
     </div>
     <div>
      <input style={{marginTop:10}} required type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <div>
      <button style={{marginTop:10}} type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
