import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="email" placeholder="Email" className="border p-2 m-2" />
      <input type="password" placeholder="Password" className="border p-2 m-2" />
      <button className="bg-blue-600 text-white p-2 rounded">Login</button>
    </div>
  );
};

export default Login;
