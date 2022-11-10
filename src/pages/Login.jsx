import React, { useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();

  const handlerUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        navigate("/");
        console.log("a");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlerUser();
  }, [navigate]);

  return (
    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <form onSubmit={handleSubmit}>
        <p class="text-lg mb-0 mr-4">Ingrese con su mail</p>
        <input
          type="email"
          name="email"
          placeholder="your.email@site.com"
          onChange={(e) => setEmail(e.target.value)}
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <div class="text-center">
          <button class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
