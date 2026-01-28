import React from 'react'
import { useState } from 'react';
import { Star } from 'lucide-react';
import Button from '../../../common/ui/Button';

const FeedbackHistory = () => {

    const [isActive, setIsActive] = useState('received')

  const feedbackData = [
    {
      id: 1,
      name: "Aliyan",
      date: "2026-01-06",
      rating: 5,
      comment: "good session",
      course: "Teaching - Google Cloud with JUNAID ALI"
    },
    {
      id: 2,
      name: "Aliyan",
      date: "2026-01-06",
      rating: 5,
      comment: "good session with aliyan",
      course: "Teaching - Machine Learning with Aliyan"
    },
    {
      id: 2,
      name: "Aliyan",
      date: "2026-01-06",
      rating: 5,
      comment: "good session with aliyan",
      course: "Teaching - Machine Learning with Aliyan"
    }
  ];

  return (
    <div className="w-full mt-8">
      <h2 className="text-[32px] font-bold mb-6">Feedback History</h2>

      <div className="flex gap-2 justify-center mb-8 bg-primary/20 w-fit p-1 rounded-[10px] mx-auto">
        <button
            onClick={() => {
                setIsActive('received')
            }} 
            className={`${isActive === 'received' ? 'bg-linear-to-r from-primary-from to-primary-to text-white' : 'bg-none text-black'}  p-4 font-medium cursor-pointer  rounded-[10px]`}
        >
            Feedback Received
        </button>
        <button
            onClick={() => {
                setIsActive('given')
            }} 
            className={`${isActive === 'given' ? 'bg-linear-to-r from-primary-from to-primary-to text-white' : 'bg-none text-black'} p-4 font-medium text-black rounded-[10px] cursor-pointer`}
        >
            Feedback Given
        </button>
      </div>

      <div className="space-y-4">
        {feedbackData.map((item) => (
          <div key={item.id} className="border border-border-color rounded-[20px] p-6 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-15 h-15 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <div>
                  <h4 className="text-2xl font-medium">{item.name}</h4>
                  <p className="font-medium text-sm text-gray-500">Rated you</p>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex gap-0.5 mb-1">
                    <Star size={20} strokeWidth={0} fill='#FFC107'/>
                    <Star size={20} strokeWidth={0} fill='#FFC107'/>
                    <Star size={20} strokeWidth={0} fill='#FFC107'/>
                    <Star size={20} strokeWidth={0} fill='#FFC107'/>
                    <Star size={20} strokeWidth={0} fill='#FFC107'/>
                </div>
                <span className="text-xs text-text-gray font-medium">{item.date}</span>
              </div>
            </div>

            <p className="text-sm text-text-gray mb-4">{item.comment}</p>

            <div className="inline-block bg-primary/20 text-primary text-sm px-3 py-1.5 rounded-full font-medium">
              {item.course}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackHistory