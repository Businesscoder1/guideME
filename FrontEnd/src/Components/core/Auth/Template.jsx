import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid align-middle  justify-center min-h-[calc(100vh-2.5rem)] place-items-center bg-gray-900 text-white">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" flex   flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="w-400 m-5">
            <h1 className="text-[2rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-300">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
         
        </div>
      )}
    </div>
  )
}

export default Template
