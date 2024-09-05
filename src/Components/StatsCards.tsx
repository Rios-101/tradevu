"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { FaChevronDown, FaRegCopy } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
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

            <div className="flex-shrink-0 space-y-3  md:w-auto p-4 bg-white border-[#E7E9FB] border rounded-lg">
                <h2 className="text-sm font-medium text-primary-900">Your balance</h2>
                <p className="text-2xl font-medium text-primary-901 "><span className='text-primary-900 pr-1'>₦</span>4,350,000<span className='text-primary-900 text-lg'>.20</span></p>
                <div className='flex gap-2 items-center'>
                    <span className="text-primary-900 xl:text-base text-sm">0912873465</span>
                    <div className='cursor-pointer' onClick={() => handleCopy("0912873465")}>

                        <Image src={"/copy.png"} alt='copy' width={16} height={16} />
                    </div>
                    <span className='text-primary-900 xl:text-base text-sm'>• Sudo Bank</span>
                </div>
            </div>

            <div className="flex-shrink-0 space-y-3  md:w-auto p-4 bg-white border-[#E7E9FB] border rounded-lg">

                <h2 className="text-sm font-medium text-primary-900">Active orders</h2>
                <p className="text-2xl font-medium text-primary-901">7</p>
                <div className="text-gray-500 flex justify-between items-center">
                    <div className='text-primary-901'>₦ 0.00 <span className='text-primary-900'>overdue</span></div>
                    <Image src={"/Content.png"} alt='content' width={40} height={8} />
                </div>
            </div>

            <div className="flex-shrink-0 space-y-3  md:w-auto p-4 bg-white border-[#E7E9FB] border rounded-lg">

                <h2 className="text-sm font-medium text-primary-900">Active loans</h2>
                <p className="text-2xl font-medium text-primary-901">10</p>
                <div className="text-gray-500 "><span className='text-primary-901'>2</span> pending payment</div>
            </div>
            <div className="flex-shrink-0 space-y-3   md:w-auto p-4 bg-white border-[#E7E9FB] border rounded-lg">



                <div className='flex justify-between items-start'>
                    <h2 className="text-sm font-medium text-primary-900">Unpaid invoices</h2>
                    <Menu>
                        <MenuButton className="  flex items-center gap-1 text-sm font-medium text-primary-901 ">
                            All time
                            <HiOutlineChevronDown />
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
                <p className="text-2xl font-medium text-primary-901">2</p>
                <div className=' text-primary-901 xl:text-base text-sm'>₦720,000.00 <span className='text-primary-900 xl:text-base text-sm'>overdue</span></div>



            </div>



        </div>
    );
};

export default StatsCards;
