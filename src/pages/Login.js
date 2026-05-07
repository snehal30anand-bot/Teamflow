import { useState } from "react";

import api from "../api";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const login = async () => {

    try {

      const res = await api.post("/auth/login", form);

      console.log(res.data);

     localStorage.setItem("role", res.data.user.role);

     alert("Login Successful ✅");

    } catch (err) {

      console.log(err);

      alert("Login Failed ❌");

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

    </div>

  );

}