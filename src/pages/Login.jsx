import React, { useState } from "react";
import { client } from "../supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.auth.signIn({
        email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <input
          onSubmit={handleSubmit}
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Login;
