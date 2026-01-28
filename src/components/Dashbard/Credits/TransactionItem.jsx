import React from 'react'
import { MoveDownLeft, MoveUpRight, CreditCard } from 'lucide-react'

const TransactionItem = ({type = '', title = '', amount = 1, date = '', time = ''}) => {
    const isCredit = amount > 0
  return (
    <div className='flex justify-between items-center gap-6'>
        <div className='flex gap-4 items-center'>
            <div className={`w-14 h-14 rounded-[10px] flex justify-center items-center ${isCredit ? 'bg-menu-highlight' : 'bg-red-500/20'}`}>
                {
                    type == 'purchase' ? <CreditCard size={30} strokeWidth={2} color='#2A9D90'/> : isCredit ? <MoveUpRight size={30} strokeWidth={2} color='#2A9D90'/>  : <MoveDownLeft size={30} strokeWidth={2} color='red'/>
                }
            </div>
            <div>
                <h5 className='text-lg font-medium text-text-gray'>{title}</h5>
                <h6 className='text-sm font-medium text-text-gray'>
                    <span>{date} * {time}</span>
                </h6>
            </div>
        </div>
        <div>
            <span className={`text-xl font-medium ${isCredit ? 'text-primary' : 'text-red-500'}`}>{isCredit ? '+' : ''}{amount}</span>
        </div>
    </div>
  )
}

export default TransactionItem