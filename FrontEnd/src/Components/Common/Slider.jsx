import React, { useState } from 'react';

const Slider = ({ skillName }) => {
  const [rating, setRating] = useState(0); // Default rating value

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">{skillName} Rating :</h2>
      <div className="flex items-center  justify-between mb-4">
        <span className="text-sm sm:text-base p-2 sm:p-4 text-gray-100">0</span>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-screen text-yellow-300 h-2 cursor-pointer bg-gradient-to-r from-red-200 to-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{
            background: `linear-gradient(to right, #facc15 ${rating * 10}%, #d1d5db ${rating * 10}%)`,
          }}
        />
        <span className="text-sm sm:text-base p-2 sm:p-4 text-gray-100">10</span>
      </div>
      <div className="text-center">
        <span className="text-lg sm:text-xl font-bold text-blue-100">Rating: {rating}</span>
      </div>
    </div>
  );
};

export default Slider;
