import React from 'react';

const InputBox = ({ 
  label, 
  type = 'text', 
  value = '',  // Ensure default value is an empty string
  onChange, 
  placeholder = '', 
  step, 
  min, 
  max
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          let newValue = e.target.value;

          // Handle numeric input specifically
          if (type === 'number') {
            newValue = parseFloat(newValue);
            // Validate if the new value is within the range and update state accordingly
            if (newValue <= 10 && newValue >= 0) {
              onChange(newValue);
            } else if (newValue === '') {
              onChange(''); // Allow empty input
            }
          } else {
            onChange(newValue); // For other types, just update the value
          }
        }}
        placeholder={placeholder}  // Placeholder will only show when value is empty
        step={step}
        min={min}
        max={max}
        className={`w-full px-4 py-2 border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
    </div>
  );
};

export default InputBox;
