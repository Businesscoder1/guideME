import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import InputBox from "../../Common/InputBox"

// function SignupForm() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // Initial form state
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   // State for password validation, strength, and form validity
//   const [passwordStrength, setPasswordStrength] = useState(0)

//   const { firstName, lastName, email, password, confirmPassword } = formData

//   // Password strength checker, returning a strength level (0 to 4)
//   const checkPasswordStrength = (password) => {
//     let strength = 0
//     if (password.length >= 6) strength++
//     if (/[A-Z]/.test(password)) strength++
//     if (/\d/.test(password)) strength++
//     if (/[^A-Za-z0-9]/.test(password)) strength++
//     return strength
//   }

//   // Handle input fields, updating state and validation in real-time
//   const handleOnChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))

//     // Check password strength in real-time
//     if (name === "password") {
//       const strength = checkPasswordStrength(value)
//       setPasswordStrength(strength)
//     }
//   }

//   // Validate if all fields are filled and passwords match
//   const validateForm = () => {
//     return (
//       firstName &&
//       lastName &&
//       email &&
//       password &&
//       confirmPassword &&
//       password === confirmPassword
//     )
//   }

//   // Handle form submission
//   const handleOnSubmit = (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       toast.error("Please fill all required fields and ensure passwords match.")
//       return
//     }

//     // Prepare signup data
//     const signupData = { ...formData }

//     // Setting signup data to state for future use after OTP verification
//     dispatch(setSignupData(signupData))
//     dispatch(sendOtp(formData.email, navigate))

//     // Reset form
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     })
//   }

//   return (
//     <div className="pt-10 pr-300 ">
//       {/* Form */}
//       <form onSubmit={handleOnSubmit} className="flex text-white justify-center align-middle w-full flex-col gap-y-4">
//         <div className="flex gap-x-4">
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <InputBox
//               required
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleOnChange}
//               placeholder="Enter first name"
//               className="form-style w-full rounded-md h-10 text-black p-3"
//             />
//           </label>
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Last Name <sup className="text-pink-200">*</sup>
//             </p>
//             <InputBox
//               required
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleOnChange}
//               placeholder="Enter last name"
//               className="form-style w-full rounded-md h-10 text-black p-3"
//             />
//           </label>
//         </div>

//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <InputBox
//             required
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             className="form-style w-80 rounded-md h-10 text-black p-3"
//           />
//         </label>

//         <div className="flex gap-x-4">
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Create Password <sup className="text-pink-200">*</sup>
//             </p>
//             <InputBox
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleOnChange}
//               placeholder="Enter Password"
//               className="form-style w-full rounded-md h-10 text-black p-3 !pr-10"
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//             {/* Password Strength Indicator */}
//             <div className="flex gap-1 mt-2">
//               {Array.from({ length: 4 }, (_, i) => (
//                 <div
//                   key={i}
//                   className={`h-1 w-full ${
//                     i < passwordStrength ? "bg-green-500" : "bg-gray-300"
//                   } rounded-full`}
//                 ></div>
//               ))}
//             </div>
//           </label>

//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Confirm Password <sup className="text-pink-200">*</sup>
//             </p>
//             <InputBox
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleOnChange}
//               placeholder="Confirm Password"
//               className="form-style w-full rounded-md h-10 text-black p-3 !pr-10"
//             />
//             <span
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showConfirmPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className={`mt-6 mr-20 cursor-pointer rounded-[8px] bg-yellow-50 py-[8px] px-[5px] font-medium text-gray-900 hover:bg-yellow-400 ${
//             !validateForm() && "opacity-50 cursor-not-allowed"
//           }`}
//           disabled={!validateForm()}
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   )
// }
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

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }


  return (
    <div>
     
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-gray-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-gray-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-gray-800 p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-5">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-gray-800 p-[12px] pr-10 "
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
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-gray-800 p-[12px] pr-10 text-richblack-5"
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
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
export default SignupForm
