import React, { useState } from 'react';

const Slider = ({ skillName }) => {
  const [rating, setRating] = useState(5); // Default rating value

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{skillName} Rating</h2>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">0</span>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full h-2 bg-blue-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-600">10</span>
      </div>
      <div className="text-center">
        <span className="text-xl font-bold text-blue-600">Rating: {rating}</span>
      </div>
    </div>
  );
};

export default Slider;
