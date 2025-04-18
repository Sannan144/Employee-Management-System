import React, { useState } from 'react';

const Login = ({checkData}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const change = (details) => {
    if (details.target.type === 'email') {
      setEmail(details.target.value);
    } else {
      setPassword(details.target.value);
    }
  };

  let subm = (details) => {
    details.preventDefault()
    checkData(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full h-screen flex justify-center items-center">
        <form onSubmit={subm} className="login-form w-full max-w-sm p-8 bg-white shadow-xl rounded-lg space-y-8">
          {/* Logo or Title */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-semibold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-500 mt-2">Please login to continue</p>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              className="w-full p-4 pr-10 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter Your Email"
              onChange={change}
              value={email}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
              📧
            </span>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              className="w-full p-4 pr-10 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Enter Your Password"
              onChange={change}
              value={password}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
              🔒
            </span>
          </div>

          {/* Login Button */}
          <button className="w-full cursor-pointer bg-blue-600 text-white p-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300">
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
