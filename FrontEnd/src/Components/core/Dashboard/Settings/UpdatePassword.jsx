import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../Common/IconBtn";
import InputBox from "../../../Common/InputBox"; // Assuming InputBox is in the Common folder

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth); // Get the token from the Redux store
  const navigate = useNavigate();

  const [showOldPassword, setShowOldPassword] = useState(false); // Toggle for showing old password
  const [showNewPassword, setShowNewPassword] = useState(false); // Toggle for showing new password

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize react-hook-form

  const submitPasswordForm = async (data) => {
    // Handle password submission
    try {
      // await changePassword(token, data) // API call to change the password
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message); // Log any error
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitPasswordForm)}>
        <div className="my-10 text-white flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-gray-900 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
          
          {/* Password Fields */}
          <div className="flex flex-col gap-5 lg:flex-row">
            
            {/* Old Password */}
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <InputBox
                label="Current Password"
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter Current Password"
                value=""
                inputStyle="text-black"  // Ensure the password text is black
                onChange={(value) => {
                  register("oldPassword").onChange({ target: { value } });
                }}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[45px] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Current Password.
                </span>
              )}
            </div>

            {/* New Password */}
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <InputBox
                label="New Password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter New Password"
                value=""
                inputStyle="text-black"  // Ensure the password text is black
                onChange={(value) => {
                  register("newPassword").onChange({ target: { value } });
                }}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[45px] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your New Password.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-900 h-30 flex justify-end gap-2">
          {/* Cancel Button */}
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>

          {/* Submit Button */}
          <IconBtn type="submit" text="Update" />
        </div>
      </form>
    </>
  );
}
