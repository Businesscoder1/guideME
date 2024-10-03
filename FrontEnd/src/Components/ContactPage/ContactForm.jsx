import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-gray-400  rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-gray-900 shadow-lg">
      <h1 className="text-4xl leading-10 font-semibold text-gray-100">
        Need Career Guidance? We’re here to help.
      </h1>
      <p className="text-lg text-gray-200">
        Share your career goals with us, and we’ll guide you on the best path
        based on your interests and skills.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
