import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  {
    /*Remove once handlers are finished*/
  }
  const [login, setLogin] = useState(false);
  const [recover, setRecover] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
    {
      /*needs finishing*/
    }
  };

  const handlePwdRecover = () => {
    setRecover(!recover);
    {
      /*needs finishing*/
    }
  };

  const handleSignup = () => {
    setSignup(!signup);
    {
      /*needs finishing*/
    }
  };

  return (
    <div
      style={{
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "darkgray",
        maxWidth: 400,
        borderRadius: 40,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "gray" }}>username</span>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 5 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "gray" }}>password</span>
        <input
          name="pwd"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          style={{ padding: 5 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          name="login"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "#440D47",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 25,
            width: 300,
            marginTop: 20,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 10,
          }}
          onClick={handleLogin}
        >
          <span>login</span>
        </button>
        <div>
          <button
            name="pwdRecover"
            onClick={handlePwdRecover}
            style={{ color: "gray" }}
          >
            forgot password
          </button>
          <span style={{ color: "gray" }}> | </span>
          <button
            name="signup"
            onClick={handleSignup}
            style={{ color: "gray" }}
          >
            signup
          </button>
        </div>
      </div>
      {/*Remove once handlers are finished*/}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {login ? <span>login handler missing</span> : null}
        {recover ? <span>pwdRecover handler missing</span> : null}
        {signup ? <span>signup handler missing</span> : null}
      </div>
    </div>
  );
};

export default Login;
