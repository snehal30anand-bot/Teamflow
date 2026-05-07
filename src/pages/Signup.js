import { useState } from "react";
import api from "../api";

export default function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const submit = async () => {

    try {

      console.log(form);

      const res = await api.post("/auth/signup", form);

      console.log(res.data);

      alert("Signup Successful ✅");

    } catch (err) {

      console.log(err);

      alert("Signup Failed ❌");

    }

  };

  return (

    <div>

      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />

      <br /><br />

      <input
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
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <br /><br />

      <input
        placeholder="Role"
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={submit}>
        Signup
      </button>

    </div>

  );

}