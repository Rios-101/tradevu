import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

const transactions = [
    { id: 1, title: 'To Emina Odette', amount: '- ₦10,000.00', time: '7:18 AM', status: 'Pending', balance: '₦4,350,000.20', date: 'Today' },
    { id: 2, title: 'To Archibald Holdings', amount: '- ₦65,000.00', time: '7:18 AM', status: 'Completed', balance: '₦4,350,000.20', date: 'Yesterday' },
    { id: 3, title: 'To Bass Industries', amount: '- ₦10,000.00', time: '7:18 AM', status: 'Failed', balance: '₦4,415,000.20', date: 'Fri 19 Jul' },
    { id: 4, title: 'From S&B Incorporated', amount: '+ ₦190,000.00', time: '7:18 AM', status: 'Pending', balance: '₦4,415,000.20', date: '' },
    { id: 5, title: 'To Humphrey & Co.', amount: '- ₦30,000.00', time: '7:18 AM', status: 'Completed', balance: '₦4,225,000.20', date: '' },
];

const RecentTransactions = () => {
    return (
        <div className="p-4 bg-white border-[#E7E9FB] border rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="md:text-base text-xxs text-primary-900 font-medium">Recent transactions</h2>
                <button className="bg-gray-100 gap-1 md:text-base flex items-center text-xxs text-gray-700 font-medium px-2 py-2 rounded-md">
                    Print statement
                    <HiOutlineChevronDown />
                </button>
            </div>
            <div className="space-y-4">
                {transactions.map((transaction, index) => (
                    <div className='pb-2' key={index}>
                        <div className='flex items-center gap-2 pb-2'>
                            <p className={`md:text-sm text-xxs text-primary-902 ${transaction.date && `md:w-[10%]`}`}>{transaction.date}</p>
                            <div className='border-b border-primary-903 w-full h-[0.1px] ' />
                        </div>
                        <div key={transaction.id} className="flex justify-between items-center">
                            <div>

                                <p className="font-medium md:text-base text-xs">{transaction.title}</p>
                                <p className="md:text-sm text-xxs text-gray-500">{transaction.time} - <span className={`${transaction.status === "Pending" ? `text-yellow-500` : transaction.status === "Completed" ? `text-green-500` : `text-red-500`}`}>{transaction.status}</span></p>
                            </div>
                            <div className="text-right">
                                <p className={`font-semibold md:text-base text-xs ${transaction.status === "Failed" ? 'text-red-500' : transaction.status === "Pending" ? `text-primary-901` : 'text-green-500'}`}>
                                    {transaction.amount}
                                </p>
                                <p className="md:text-sm text-xxs text-gray-500">{transaction.balance}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <a href="#" className="text-purple-500 md:text-base text-xs">View full transaction history</a>
            </div>
        </div>
    );
};

export default RecentTransactions;
