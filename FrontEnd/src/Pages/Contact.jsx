import React from "react"

import Footer from '../Components/Common/Footer'
import ContactDetails from "../Components/ContactPage/ContactDetails"
import ContactForm from "../Components/ContactPage/ContactForm"
// import ReviewSlider from "../Components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-900 w-screen p-10   flex  max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%] ">
          <ContactForm />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact