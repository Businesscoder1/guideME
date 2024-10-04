import React, { useState } from 'react';
import Slider from '../Components/Common/Slider';
import Button from '../Components/core/HomePage/Button';
import TypingAnimation from '../components/ui/typing-animation';

const Assessment3 = () => {
  const [ratings, setRatings] = useState({
    Python: 0,
    Java: 0,
    CPP: 0,
    JavaScript: 0,
    CSharp: 0,
    PHP: 0,
    Ruby: 0,
    Swift: 0,
    Go: 0,
    Rust: 0,
    Others: 0,
    Interest_In_Software_Dev: 0,
    Interest_In_Database_Management: 0,
    Interest_In_Networking_Skills: 0,
    Interest_In_WebDevelopment: 0,
  });




  return (
    <div className="font-serif pt-20 bg-gray-900 p-10">
      
      <TypingAnimation className="text-2xl text-center text-orange-500 font-serif mb-6" text="Evaluate Your Proficiency in Programming and Technical Skills" />

      {Object.keys(ratings).map((skill) => (
        <div key={skill} className="mb-6">
          <Slider skillName={skill} />
        </div>
      ))}

      <div className="flex justify-between mt-10">
        <Button linkto="/assessment2" active={true}>Back</Button>
        <Button active={true}>Submit</Button>
      </div>
    </div>
  );
};

export default Assessment3;
