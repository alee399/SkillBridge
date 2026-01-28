import React from 'react'
import TransactionItem from './TransactionItem'
import CardHeader from './CardHeader'

const TransactionList = () => {
  const transactions = [
    {
      title: "Teaching React Basics to Sarah M.",
      amount: 25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
    },
    {
      title: "Learning Python with Alex T.",
      amount: -25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
    },
    {
      title: "Teaching TypeScript to David C.",
      amount: 25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
    },
    {
      title: "Teaching UI Design to Emma W.",
      amount: 25,
      date: "Nov 30, 2025",
      time: "4:00 PM",
    },
    {
      title: "Learning Spanish with Maria G.",
      amount: -25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
    },
    {
      title: "Teaching React Basics to Sarah M.",
      amount: -25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
    },
    {
      title: "Credit Purchase",
      amount: 25,
      date: "Dec 4, 2025",
      time: "10:25 PM",
      type: "purchase",
    },
  ];
  return (
    <div className='w-full p-7.5 border border-border-color rounded-[20px]'>
      <CardHeader title='Recent Transactions' />
      <div className='space-y-8'>
        {transactions.map((item, index) => (
          <TransactionItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
            time={item.time}
            type={item.type}
          />
        ))}
        <div className='flex justify-center'>
          <button className='text-2xl text-primary font-medium cursor-pointer'>
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionList