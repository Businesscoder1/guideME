import React, { useState } from 'react';
import RadioButton from '../Components/Common/RadioButton';
import Dropdown from '../Components/Common/Dropdown';
import InputBox from '../Components/Common/InputBox';
const Assessment1 = () => {
  // State management for all fields
  const [cgpa, setCgpa] = useState(); // CGPA rating slider
  const [courseStatus, setCourseStatus] = useState('');
  const [academicAchievement, setAcademicAchievement] = useState('');
  const [personalInterest, setPersonalInterest] = useState('');
  const [internship, setInternship] = useState('');
  const [certificates, setCertificates] = useState('');
  const [leadership, setLeadership] = useState('');

  // Options for radio buttons
  const courseStatusOptions = [
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Completed', value: 'completed' }
  ];
  
  const achievementOptions = [
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' }
  ];

  const yesNoOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
  ];

  // Dropdown options
  const personalInterestOptions = [
    'Travelling', 'Coding', 'Gaming', 'Reading', 'Sports', 'Music'
  ];

  const handleCgpaChange = (value) => {
    if (value === '' || (value >= 0 && value <= 10)) {
      setCgpa(value);
      setError(''); // Clear error if valid
    } else {
      setError('CGPA must be between 0.0 and 10.0');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Assessment 1</h1>

        {/* CGPA Slider */}
        <div className="mb-6">
        <InputBox
          label="CGPA"
          // type="number"
          placeholder="Enter CGPA (0.0 - 10.0)"
          value={cgpa}
          onChange={handleCgpaChange} 
          step="0.1"
          min="0"
          max="10"
          
        />
        </div>

        {/* Course Status Radio Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Course Status</h2>
          <RadioButton
            options={courseStatusOptions}
            name="course-status"
            selectedValue={courseStatus}
            onChange={setCourseStatus}
          />
        </div>

        {/* Academic Achievements Radio Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Academic Achievements</h2>
          <RadioButton
            options={achievementOptions}
            name="academic-achievement"
            selectedValue={academicAchievement}
            onChange={setAcademicAchievement}
          />
        </div>

        {/* Personal Interest Dropdown */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Interest</h2>
          <Dropdown
            options={personalInterestOptions}
            value={personalInterest}
            onChange={setPersonalInterest}
          />
        </div>

        {/* Internship Experience Radio Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Internship Experience</h2>
          <RadioButton
            options={yesNoOptions}
            name="internship"
            selectedValue={internship}
            onChange={setInternship}
          />
        </div>

        {/* Certificates Radio Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Certificates</h2>
          <RadioButton
            options={yesNoOptions}
            name="certificates"
            selectedValue={certificates}
            onChange={setCertificates}
          />
        </div>

        {/* Leadership Experience Radio Buttons */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Leadership Experience</h2>
          <RadioButton
            options={yesNoOptions}
            name="leadership"
            selectedValue={leadership}
            onChange={setLeadership}
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment1;

// import React, { useState } from 'react';
// import RadioButton from '../Components/RadioButton';
// import Dropdown from '../Components/Dropdown';
// import InputBox from '../Components/InputBox';


// const Assessment1 = () => {
//   const [cgpa, setCgpa] = useState(''); // State for CGPA
//   const [courseStatus, setCourseStatus] = useState('');
//   const [academicAchievement, setAcademicAchievement] = useState('');
//   const [personalInterest, setPersonalInterest] = useState('');
//   const [internship, setInternship] = useState('');
//   const [certificates, setCertificates] = useState('');
//   const [leadership, setLeadership] = useState('');

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         <h1 className="text-2xl font-bold mb-6 text-gray-700">Assessment 1</h1>

//         {/* CGPA Input */}
       

//         {/* Course Status (Radio Buttons) */}
//         <RadioButton
//           label="Course Status"
//           options={['In Progress', 'Completed']}
//           selectedOption={courseStatus}
//           onChange={setCourseStatus}
//         />

//         {/* Academic Achievements (Radio Buttons) */}
//         <RadioButton
//           label="Academic Achievements"
//           options={['High', 'Medium', 'Low']}
//           selectedOption={academicAchievement}
//           onChange={setAcademicAchievement}
//         />

//         {/* Personal Interest (Dropdown) */}
//         <Dropdown
//           options={['Travelling', 'Coding', 'Gaming', 'Reading', 'Sports', 'Music']}
//           value={personalInterest}
//           onChange={setPersonalInterest}
//         />

//         {/* Internship Experience (Radio Buttons) */}
//         <RadioButton
//           label="Internship Experience"
//           options={['Yes', 'No']}
//           selectedOption={internship}
//           onChange={setInternship}
//         />

//         {/* Certificates (Radio Buttons) */}
//         <RadioButton
//           label="Certificates"
//           options={['Yes', 'No']}
//           selectedOption={certificates}
//           onChange={setCertificates}
//         />

//         {/* Leadership Experience (Radio Buttons) */}
//         <RadioButton
//           label="Leadership Experience"
//           options={['Yes', 'No']}
//           selectedOption={leadership}
//           onChange={setLeadership}
//         />
//       </div>
//     </div>
//   );
// };

// export default Assessment1;
