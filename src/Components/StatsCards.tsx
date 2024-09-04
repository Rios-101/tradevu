"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React from 'react';
import { FaChevronDown, FaRegCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';

const StatsCards: React.FC = () => {
    const stats = [
        { title: 'Your balance', amount: '₦4,350,000.20', details: '0912873465 • Sudo Bank' },
        { title: 'Active orders', amount: '7', details: '₦0.00 overdue' },
        { title: 'Active loans', amount: '10', details: '2 pending payment' },
        { title: 'Unpaid invoices', amount: '2', details: '₦720,000.00 overdue' },
    ];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success('Number copied to clipboard!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch(() => {
            toast.error('Failed to copy!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    };

    return (
        <div className="flex md:grid grid-cols-1 py-3  md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">

            <div className="flex-shrink-0 w-72 md:w-auto p-4 bg-white shadow rounded-lg">
                <h2 className="text-sm font-medium text-primary-900">Your balance</h2>
                <p className="text-2xl font-medium text-primary-901 ">₦4,350,000.20</p>
                <div className='flex gap-2 items-center pt-2'>
                    <span className="text-gray-500">0912873465</span>
                    <div className='cursor-pointer' onClick={() => handleCopy("0912873465")}>
                        <FaRegCopy color='#873BFF' />
                    </div>
                    <span>• Sudo Bank</span>
                </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-auto p-4 bg-white shadow rounded-lg">

                <h2 className="text-sm font-medium text-primary-900">Active orders</h2>
                <p className="text-2xl font-medium text-primary-901">7</p>
                <span className="text-gray-500 mt-3">₦0.00 overdue</span>
            </div>

            <div className="flex-shrink-0 w-72 md:w-auto p-4 bg-white shadow rounded-lg">

                <h2 className="text-sm font-medium text-primary-900">Active loans</h2>
                <p className="text-2xl font-medium text-primary-901">10</p>
                <span className="text-gray-500 mt-3">2 pending payment</span>
            </div>
            <div className="flex-shrink-0 flex justify-between items-start w-72 md:w-auto p-4 bg-white shadow rounded-lg">

                <div>
                    <h2 className="text-sm font-medium text-primary-900">Unpaid invoices</h2>
                    <p className="text-2xl font-medium text-primary-901">2</p>
                    <span className="text-gray-500 mt-3">₦720,000.00 overdue</span>
                </div>

                <Menu>
                    <MenuButton className=" py-1.5 px-3 flex items-center gap-1 text-xsm font-medium text-primary-900 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700">
                        All time
                        <FaChevronDown className="size-4 fill-black" />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-20 origin-top-right rounded-xl border border-white/5 bg-primary-300 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-2 data-[focus]:bg-white/10">
                                Edit
                            </button>
                        </MenuItem>

                    </MenuItems>
                </Menu>
            </div>



        </div>
    );
};

export default StatsCards;
