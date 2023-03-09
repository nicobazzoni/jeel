import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid lg:flex-grow  gap-4 w-full py-2 ">
      <form className="bg-white shadow-md rounded space-y-4 px-8   pb-8 mb-4 justify-items-center" onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        ></input>
        <button className="border bg-rose-400 mb-2 p-2 rounded-full ml-2" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;