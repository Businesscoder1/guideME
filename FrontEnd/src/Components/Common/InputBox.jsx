import React from 'react';

const InputBox = ({ 
  label, 
  type = 'text', 
  value = '',  
  onChange, 
  placeholder = '', 
  step, 
  min, 
  max 
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-100 text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          let newValue = e.target.value;

          if (type === 'number') {
            newValue = parseFloat(newValue);
            if (newValue <= 10 && newValue >= 0) {
              onChange(newValue);
            } else if (newValue === '') {
              onChange(''); 
            }
          } else {
            onChange(newValue); 
          }
        }}
        placeholder={placeholder} 
        step={step}
        min={min}
        max={max}
        className={`px-4 py-2 border-gray-400 bg-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 
          w-full md:w-80`}  // Adjusts width for different screen sizes
      />
    </div>
  );
};

export default InputBox;
