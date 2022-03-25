import axios from "axios";
import React, { useState } from "react";
import "../login.css";

export default function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  let handleSignUp = () => {
    props.history.push(`/register`);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      `https://equipment-hiring.herokuapp.com/signin`,
      { username, password }
    );
    setmessage(data.data.message);
  };
  return (
    <div class="container" style={{ "margin-top": "70px" }}>
      <div
        id="formContent"
        style={{ margin: "auto", width: "60%", "margin-bottom": "70px" }}
      >
        <div class="fadeIn first">
          <img
            src="https://icon-library.com/images/icon-users/icon-users-15.jpg"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="email"
            id="login"
            class="fadeIn second"
            name="login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="email id"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <input
            type="submit"
            class="fadeIn fourth btn btn-primary"
            value="Log In"
          />
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#" onClick={handleSignUp}>
            Not a member?
          </a>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
