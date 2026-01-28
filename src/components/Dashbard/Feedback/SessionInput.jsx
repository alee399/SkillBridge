import React from 'react';
import { ChevronDown } from 'lucide-react';

const SessionInput = () => {

  return (
    <div className='mt-8 pb-4 border-b border-border-color'>
        <h5 className='font-medium mb-2'>Select Session</h5>
        <div className="relative">
            <select className="w-full p-4 bg-white border border-gray-200 rounded-xl appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Aliyan - Teaching - Machine Learning with Aliyan (2026-01-20)</option>
            <option>Michael Chen - Advanced React Development (2025-10-26)</option>
            <option>Sarah Jenkins - UI/UX Fundamentals (2025-11-12)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
    </div>
  )
}
export default SessionInput