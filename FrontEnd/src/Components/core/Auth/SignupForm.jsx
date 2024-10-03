import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { NeonGradientCard } from "../../../components/ui/neon-gradient-card"
// import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Initial form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // State for password validation, strength, and form validity
  const [passwordError, setPasswordError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isFormValid, setIsFormValid] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Password strength checker, returning a strength level (0 to 4)
  const checkPasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 6) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  // Handle input fields, updating state and validation in real-time
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))

    // Check password strength in real-time
    if (e.target.name === "password") {
      const strength = checkPasswordStrength(e.target.value)
      setPasswordStrength(strength)
    }

    // Check password match only after confirmPassword input
    if (e.target.name === "confirmPassword") {
      if (e.target.value !== password) {
        setPasswordError("Passwords do not match")
      } else {
        setPasswordError("") // Clear error if they match
      }
    }

    // Check if form is valid when all fields are filled
    validateForm()
  }

  // Validate if all fields are filled and passwords match
  const validateForm = () => {
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      passwordStrength > 1 // Ensure password is not weak
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    // If form is valid, proceed with signup
    if (isFormValid) {
      // Prepare signup data
      const signupData = {
        ...formData,
      }

      // Setting signup data to state for future use after OTP verification
      dispatch(setSignupData(signupData))
      // dispatch(sendOtp(formData.email, navigate))

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } else {
      toast.error("Please fill all required fields and ensure passwords match.")
    }
  }

  // Navigate to verify email page
  const verifyEmail = () => {
    navigate("/verify-email")
  }

  return (
    <div className="pt-10 pr-300 ">
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex  text-white justify-center align-middle w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full rounded-md h-10 text-black p-3"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full rounded-md h-10 text-black p-3"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-80 rounded-md h-10 text-black p-3"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
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
            {/* Password Strength Indicator */}
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`h-1 w-full ${
                    i < passwordStrength ? "bg-green-500" : "bg-gray-300"
                  } rounded-full`}
                ></div>
              ))}
            </div>
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full rounded-md h-10 text-black p-3 !pr-10"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* Dynamically display password error if passwords don't match */}
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

        {/* Submit button */}
        <button
  type="submit"
  onClick={verifyEmail}
  className={`mt-6 mr-20 cursor-pointer rounded-[8px] bg-yellow-50 py-[8px] px-[5px] font-medium text-gray-900 hover:bg-yellow-400 ${!isFormValid && "opacity-50 cursor-not-allowed"}`}
  disabled={!isFormValid}
>
  Create Account
</button>

      </form>
    </div>
  )
}

export default SignupForm
