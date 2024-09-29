import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { NeonGradientCard } from "../../../components/ui/neon-gradient-card"
// import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
// import { ACCOUNT_TYPE } from "../../../utils/constants"
// import Tab from "../../Common/Tab"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // State for password validation and strength
  const [passwordError, setPasswordError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState("")

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return "Weak"
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return "Good"
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      return "Strong"
    } else {
      return "Weak"
    }
  }

  // Handle input fields, when some value changes
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

    // Dynamically check if passwords match
    if (e.target.name === "confirmPassword" || e.target.name === "password") {
      if (e.target.name === "password" && e.target.value !== confirmPassword) {
        setPasswordError("Passwords do not match")
      } else if (e.target.name === "confirmPassword" && e.target.value !== password) {
        setPasswordError("Passwords do not match")
      } else {
        setPasswordError("") // Clear error if they match
      }
    }
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Ensure passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }

    // Check if password is strong enough
    if (passwordStrength === "Weak") {
      toast.error("Password is too weak")
      return
    }

    // Prepare signup data
    const signupData = {
      ...formData,
      // accountType,
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
    // setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  return (
    <div className="pt-10 pr-300 ">
      {/* Tab */}
      {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
      <NeonGradientCard className=" w-96 md:w-[500px] lg:w-[700px] " borderSize={4} borderRadius={20}>
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex  text-black justify-center align-middle w-full flex-col gap-y-4">
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
            {/* Display password strength */}
            <p className={`mt-1 text-sm ${passwordStrength === "Weak" ? "text-red-500" : passwordStrength === "Good" ? "text-yellow-500" : "text-green-500"}`}>
              {passwordStrength && `Password strength: ${passwordStrength}`}
            </p>
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

        <button
          type="submit"
          className="mt-6 cursor-pointer rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-gray-900 hover:bg-yellow-400"
          disabled={passwordError || passwordStrength === "Weak"}
        >
          Create Account
        </button>
      </form>
      </NeonGradientCard>
    </div>
  )
}

export default SignupForm
