import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center h-screen bg-white min-w-fit">
        <Link to="/">
          <img
            className="my-5 object-contain w-24 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>

        <div className="max-w-[400px] h-fit flex flex-col rounded border-2 p-5 justify-center">
          <h1 className="font-medium text-2xl mb-5">Sign-in</h1>

          <form>
            <h5 className="text-xl mb-1">E-mail</h5>
            <input
              className="h-9 mb-2 bg-white border w-full"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5 className="text-xl mb-1">Password</h5>
            <input
              className="h-9 mb-2 bg-white border w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="bg-amber-500 border-2 mt-2 p-2 w-full border-gray-400"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm mt-3">
            By signing-in you agree to the amazon clone Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.Made by simran
          </p>

          <button
            onClick={register}
            className="bg-amber-500 border-2 mt-2 p-1 w-full border-gray-400"
          >
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
