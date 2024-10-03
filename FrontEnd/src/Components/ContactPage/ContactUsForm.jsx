import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputBox from "../Common/InputBox"; // Assuming InputBox is in the same directory

// import CountryCode from "../../data/countrycode.json"
// import { apiConnector } from "../../services/apiconnector"
// import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Maintain local state for inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNo: '',
    message: ''
  });

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      // const res = await apiConnector(
      //   "POST",
      //   contactusEndpoint.CONTACT_US_API,
      //   data
      // );
      // console.log("Email Res - ", res);
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
      setFormData({ // Reset local state
        firstname: '',
        lastname: '',
        email: '',
        phoneNo: '',
        message: ''
      });
    }
  }, [reset, isSubmitSuccessful]);

  // Update local state on change
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        {/* First Name Input */}
        <InputBox
          label="First Name"
          type="text"
          placeholder="Enter first name"
          value={formData.firstname} // Use local state
          onChange={(value) => {
            handleInputChange("firstname", value);
            register("firstname").onChange({ target: { value } });
          }}
        />
        {errors.firstname && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your name.
          </span>
        )}

        {/* Last Name Input */}
        <InputBox
          label="Last Name"
          type="text"
          placeholder="Enter last name"
          value={formData.lastname} // Use local state
          onChange={(value) => {
            handleInputChange("lastname", value);
            register("lastname").onChange({ target: { value } });
          }}
        />
      </div>

      {/* Email Input */}
      <InputBox
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        value={formData.email} // Use local state
        onChange={(value) => {
          handleInputChange("email", value);
          register("email").onChange({ target: { value } });
        }}
      />
      {errors.email && (
        <span className="-mt-1 text-[12px] text-yellow-100">
          Please enter your Email address.
        </span>
      )}

      {/* Phone Number Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>
        
          {/* <div className="flex w-[81px] flex-col gap-2">
            <select
              name="countrycode"
              id="countrycode"
              
              className="form-style"
              {...register("countrycode", { required: true })}
            >
              Uncomment when you have country code data
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                );
              })}
            </select>
          </div> */}
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
          <InputBox
              label=""
              type="text"
              placeholder="9370204547"
              value={formData.phoneNo} // Use local state
              maxLength={10} // Limit to 10 digits
              onChange={(value) => {
                // Allow only digits and limit to 10
                if (/^\d*$/.test(value) && value.length <= 10) {
                  handleInputChange("phoneNo", value);
                  register("phoneNo").onChange({ target: { value } });
                }
              }}
            />
            {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
          </div>
        
        
      </div>

      {/* Message Input */}
      <div className="flex text-black flex-col gap-2">
        <label htmlFor="message" className="text-white lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="Enter your message here"
          className='rounded-lg p-2'
          value={formData.message} // Use local state
          onChange={(e) => {
            handleInputChange("message", e.target.value);
            register("message").onChange(e);
          }}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-200 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none hover:bg-yellow-400"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
