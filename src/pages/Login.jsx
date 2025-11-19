import React, { use, useRef, useState } from "react";
import { motion } from "motion/react";
import { Leaf, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { googleSignIn, signIn, passwordReset } = use(AuthContext);

  const emailRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");

  const passwordChecks = (pw) => {
    return {
      hasUpper: /[A-Z]/.test(pw),
      hasLower: /[a-z]/.test(pw),
      minLen: pw.length >= 6,
    };
  };

  const checks = passwordChecks(password);
  const isPasswordValid = checks.hasUpper && checks.hasLower && checks.minLen;

  const navigate = useNavigate();
  const location = useLocation();
 

  const handleSignInEmailAndPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!isPasswordValid) {
      toast.error("Password doesn't meet the requirements.");
      return;
    }

    signIn(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
        // console.log(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
       
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        // console.log(result.user);
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;

    passwordReset(email)
      .then(() => {
        toast.success("Check Your Email");
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:p-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
      >
        <div className="flex flex-col items-center mb-6">
          <motion.div
            initial={{ rotate: -15 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-green-600 p-3 rounded-full text-white mb-3"
          >
            <Leaf size={28} />
          </motion.div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome Back 🌿
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Login to your GreenNest account
          </p>
        </div>

        <motion.form
          onSubmit={handleSignInEmailAndPassword}
          key={"login"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                required
                ref={emailRef}
                name="email"
                type="email"
                placeholder="example@mail.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className=" text-gray-400 " />
                ) : (
                  <Eye className=" text-gray-400 " />
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleResetPassword}
              className=" text-xs underline hover:text-red-500 cursor-pointer "
            >
              Forgot your password?
            </button>
            <div className="mb-3 mt-2 text-sm">
              <p className="font-medium">Password must contain:</p>
              <ul className="mt-1 space-y-1">
                <li
                  className={`flex items-center ${
                    checks.hasUpper
                      ? "opacity-100 text-[#24bd24]"
                      : "opacity-60"
                  }`}
                >
                  <span className="mr-2">{checks.hasUpper ? "✔" : "•"}</span>
                  An uppercase letter (A–Z)
                </li>
                <li
                  className={`flex items-center ${
                    checks.hasLower
                      ? "opacity-100 text-[#24bd24]"
                      : "opacity-60"
                  }`}
                >
                  <span className="mr-2">{checks.hasLower ? "✔" : "•"}</span>A
                  lowercase letter (a–z)
                </li>
                <li
                  className={`flex items-center ${
                    checks.minLen ? "opacity-100 text-[#24bd24]" : "opacity-60"
                  }`}
                >
                  <span className="mr-2">{checks.minLen ? "✔" : "•"}</span>
                  At least 6 characters
                </li>
              </ul>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full mt-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium shadow-md cursor-pointer"
          >
            Login
          </motion.button>
        </motion.form>

        <div className="text-center mt-5 text-sm text-gray-600">
          <>
            Don’t have an account?{" "}
            <NavLink
              state={location.state}
              to={"/signup"}
              className="text-green-600 font-medium hover:underline"
            >
              Sign Up
            </NavLink>
          </>
        </div>
        <div className="divider text-gray-600">OR</div>
        <div className=" space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-primary w-full rounded-xl"
          >
            <FcGoogle size={20} />
            Login With Google
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
