import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {};

  const handlePwdRecover = () => {};

  const handleSignup = () => {};

  return (
    <div className="bg-gray-200 px-10 py-6 max-w-md rounded-3xl">
      <div className="flex flex-col">
        <span className="text-gray-500">username</span>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-1"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500">password</span>
        <input
          name="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="p-1"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          name="login"
          className="bg-purple-900 w-80 py-2 px-10 mt-5 mb-2 rounded-3xl"
          onClick={handleLogin}
        >
          <span className="text-white">login</span>
        </button>
        <div>
          <button
            name="pwdRecover"
            onClick={handlePwdRecover}
            className="text-gray-500"
          >
            forgot password
          </button>
          <span className="text-gray-500"> | </span>
          <button
            name="signup"
            onClick={handleSignup}
            className="text-gray-500"
          >
            signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
