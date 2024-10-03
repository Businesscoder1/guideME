import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { NeonGradientCard } from "../../../components/ui/neon-gradient-card";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(email, password, navigate))
  };

  return (
    <div className="flex   pt-10  text-white "> {/* Centering container */}
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address here"
              className="form-style w-80 rounded-md h-10 text-black p-3"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full rounded-md h-10 text-black p-3 !pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
            <Link to="/forget-password">
              <p className="mt-1 ml-auto max-w-max text-xs text-blue-300">
                Forgot Password
              </p>
            </Link>
          </label>
          <button
            type="submit"
            className="mt-6 rounded-[8px] text-black bg-yellow-100 py-[8px] px-[12px] font-medium hover:bg-yellow-400"
          >
            Sign In
          </button>
        </form>
      
    </div>
  );
}

export default LoginForm;
