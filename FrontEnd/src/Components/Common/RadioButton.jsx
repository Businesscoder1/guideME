import React from 'react';

const RadioButton = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
