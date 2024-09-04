import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const actions = [
    { id: 1, title: "You've received an offer of", amount: '₦3,000,000', action: 'Review offer', description: 'Invoice Factoring • Moetown Purchase Order', date: 'Today' },
    { id: 2, title: "You've received a quote of", amount: '₦1,000,000', action: 'Review quote', description: 'Velcro Packaging • Bass Industries', date: 'Yesterday' },
    { id: 3, title: "Your shipment TPO-14 is pending confirmation", action: 'Review shipment', description: 'Trucking • Tradevu Commerce', date: 'Fri 19 Jul' },
    { id: 4, title: "Your repayment of", amount: '₦280,000', action: 'Make payment', description: 'Working Capital • Maersk Haulage', date: 'Fri 19 Jul' },
];

const PendingActions = () => {
    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center md:gap-3 gap-1">
                    <h2 className="md:text-base text-xs text-primary-900 font-medium">Pending actions </h2>
                    <div className="text-gray-500 size-6 rounded-full flex flex-col items-center justify-center bg-primary-300">4</div>
                </div>

                <Menu>
                    <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 md:text-sm text-xxs font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        Filter
                        <FaChevronDown className="size-4 fill-white/60" />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 mt-4 flex flex-col space-y-3 origin-top-right rounded-xl border border-primary-100/40 bg-white px-3 py-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <div className="flex hover:bg-primary-100/45 py-1 items-center space-x-2 cursor-pointer">
                                <p className="text-black pl-2 ">All</p>
                            </div>
                        </MenuItem>
                        <MenuItem>

                            <div className="flex hover:bg-primary-100/45 py-1 items-center space-x-2 cursor-pointer">
                                <p className="text-black pl-2">Offers</p>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex hover:bg-primary-100/45 py-1 items-center space-x-2 cursor-pointer">
                                <p className="text-black pl-2">Quotes</p>
                            </div>
                        </MenuItem>

                    </MenuItems>
                </Menu>
            </div>
            <div className="space-y-4">
                {actions.map((action, index) => (
                    <div key={action.id}>
                        <div className='flex items-center gap-2'>
                            <p className={`md:text-sm text-xxs text-primary-902 ${action.date && `md:w-[10%]`}`}>{action.date}</p>
                            <div className='border-b border-primary-903 w-full h-[0.1px] md:block hidden' />
                        </div>
                        <div className="flex justify-between items-center">

                            <div>
                                <p className="md:text-base text-xxs">{action.title} <span className="font-semibold">{action.amount}</span></p>
                                <p className="md:text-base text-mxs text-gray-500">{action.description}</p>
                            </div>
                            <div className="">
                                <a href="#" className="text-primary-200 font-medium md:text-base text-mxs ">{action.action}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingActions;
