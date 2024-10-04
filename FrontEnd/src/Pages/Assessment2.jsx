import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../Components/Common/Slider';
import Button from '../Components/core/HomePage/Button';
import TypingAnimation from '../components/ui/typing-animation';
const Assessment2 = () => {
  const navigate = useNavigate();
  const skills = ['Communication Skills', 'Problem Solving', 'Teamwork', 'Time Management', 'Adaptability'];

 

  return (
    <div className="bg-gray-900 w-full font-serif p-10">
      
      <TypingAnimation  className="text-2xl text-center text-orange-500 font-mono mb-6" text="Know, Rate Yourself In Soft-Skills"/>

      {skills.map((skill) => (
        <div key={skill} className="mb-6 ">
          <Slider skillName={skill} />
        </div>
      ))}

      <div className="flex justify-between mt-10">
      <div className=''></div>
        <Button linkto="/assessment1" active={true}  >Back</Button>
        <Button linkto="/assessment3" active={true}>Next</Button>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Assessment2;
