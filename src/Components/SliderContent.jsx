import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  { name: "Rohit", text: "This service is amazing! Highly recommended." },
  { name: "Lalit", text: "Great experience, will definitely use again." },
  { name: "Akash", text: "Fast, reliable, and affordable!" },
  { name: "Devansh", text: "Loved it! Customer support is top-notch." },
  { name: "Pushpender", text: "One of the best experiences I've had online." },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  
  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  
  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-6 text-center relative">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>

      {/* Review Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 min-h-[250px] flex flex-col items-center justify-center">
        <p className="text-xl text-gray-700 italic mb-6">
          “{reviews[current].text}”
        </p>
        <h3 className="text-lg font-semibold text-gray-900">
          - {reviews[current].name}
        </h3>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevReview}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full flex items-center"
          >
          <FaChevronLeft className="mr-2" /> Prev
        </button>

        <button
          onClick={nextReview}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full flex items-center"
          >
          Next <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;

//       <div
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           width: '100%',
//           height: '700px',
//         }}
//       >