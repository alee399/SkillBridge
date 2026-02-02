import React, { useState } from 'react';
import { Calendar, Clock, ChevronDown, Wallet } from 'lucide-react';
import Button from  '../../../common/ui/Button'

const SessionScheduleSidebar = () => {
  const [mode, setMode] = useState('teach'); 

  return (
    <div className="xl:max-w-82.5 w-full p-6 bg-white border-gray-100 overflow-y-auto">
      <div className="flex items-center justify-between p-3 mb-8 bg-[#F0F9F6] rounded-xl border border-[#D1E9E9]">
        <div className="flex items-center gap-2 text-gray-600">
          <Wallet size={18} className="text-[#2EB67D]" />
          <span className="text-sm font-medium">Balance</span>
        </div>
        <span className="text-xl font-bold text-[#2EB67D]">225</span>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-1">Schedule Session</h2>
        <p className="text-[12px] text-text-gray mb-6">Time Zone: UTC-5 (Auto-sync)</p>

        <div className="space-y-6">
          <div>
            <p className="text-[12px] text-text-gray mb-3">I want to:</p>
            <div className="flex gap-3">
              <Button
                variant='outline'
                size='sm'
                className='w-full'
                onClick={() => setMode('teach')}
              >
                Teach (+25)
              </Button>
              <Button
                size='sm'
                className='w-full'
                onClick={() => setMode('learn')}
              >
                Learn (-25)
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">Skill to <span className='capitalize'>{mode}</span>:</p>
            <div className="relative">
              <select className="w-full p-4 bg-white border border-gray-200 rounded-xl appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-[#2EB67D]/20">
                <option>Machine Learning</option>
                <option>Python Advanced</option>
                <option>UI Design</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative">
              <input 
                type="text" 
                defaultValue="01/27/2026"
                className="w-full p-4 border border-gray-200 rounded-xl text-sm focus:outline-none"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="03:00 PM"
                className="w-full p-4 border border-gray-200 rounded-xl text-sm focus:outline-none"
              />
              <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <Button
            variant='secondary'
            className='w-full'
          >
            Propose New Session
          </Button>
        </div>
      </section>

      {/* 3. Upcoming Reminders */}
      <section>
        <h2 className="text-lg font-semibold mb-6">Upcoming Reminders</h2>
        <div className="py-10 text-center">
          <p className="text-sm text-gray-400">No upcoming sessions scheduled</p>
        </div>
      </section>
    </div>
  );
};

export default SessionScheduleSidebar;