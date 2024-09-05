"use client";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useState } from 'react';

import countryToCurrency from "country-to-currency";
import { TiArrowSortedDown } from "react-icons/ti";

import clsx from 'clsx'
import StatsCards from './StatsCards';
import Image from 'next/image';
import { FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';


const DashboardHeader: React.FC = () => {
    const [see, setSee] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");
    const [countryCode, setCountryCode] = useState<string>("NG");

    const countries = Object.entries(countryToCurrency).map(
        ([countryCode, currency]) => ({
            countryCode,
            currencyCode: currency,
        })
    );

    const handleChange = (selectedOption: string) => {
        const selectedCountry = countries.find(
            (country) => country.countryCode === selectedOption
        );
        if (selectedCountry) {
            setSelectedCurrency(selectedCountry.currencyCode);
            setCountryCode(selectedOption);
        }
    };

    const toggleSee = () => setSee(!see);

    const countriez = [{
        country: "country",
        countryCode: "NG",
        currencyCode: "NGN"
    }]

    const renderMenuItems = () => (
        <MenuItems
            transition
            anchor="bottom end"
            className="w-60 mt-4 flex flex-col space-y-4 origin-top-right rounded-xl border border-primary-100/40 bg-white px-3 py-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            <MenuItem>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Image alt='document' src={'/document.png'} width={18} height={18} />
                    <p className="text-black">New Invoice</p>
                </div>
            </MenuItem>
            <MenuItem>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Image alt='box' src={'/box.png'} width={18} height={18} />
                    <p className="text-black">New Order</p>
                </div>
            </MenuItem>
            <MenuItem>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Image alt='ship' src={'/ship.png'} width={18} height={18} />
                    <p className="text-black">New Invoice</p>
                </div>
            </MenuItem>
        </MenuItems>
    );

    return (
        <>
            <div className="flex md:pt-10 md:pb-4 pt-8 justify-between items-end">
                <div>
                    <div className="flex gap-4 items-center">
                        <h1 className="text-2xl font-medium">
                            {see ? `Hello Bob,` : `******,`}
                        </h1>
                        <div onClick={toggleSee}>
                            {see ? <FaEyeSlash size={24} color='#667085' /> : <FaEye size={24} color='#667085' />}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-primary-900 text-xs md:text-base pt-1">
                            Overview of your activity in
                        </div>
                        <Listbox value={countryCode} onChange={handleChange}>
                            <ListboxButton className="flex justify-between p-1 bg-primary-300 gap-1 items-center relative w-fit border-l border-bg2-500">
                                <div className="flex items-center gap-1">
                                    <FlagIcon
                                        code={countryCode as FlagIconCode}

                                        className="rounded-full w-4 h-4"
                                    />
                                    <span className="block truncate font-medium text-[#344054] text-xs sm:text-base">
                                        {selectedCurrency}
                                    </span>
                                </div>
                                <TiArrowSortedDown size={16} />
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom"
                                transition
                                className={clsx(
                                    'w-[var(--button-width)] rounded-xl border border-white/5 bg-primary-300 mt-2 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                )}
                            >
                                {countriez.map((country, index) => (

                                    <ListboxOption
                                        key={index}
                                        value={country.countryCode}
                                        className="group flex cursor-default items-center gap-2 text-[#344054] bg-primary-300 rounded-lg py-1 px-2 data-[focus]:bg-white/10"
                                    >
                                        <FlagIcon
                                            code={country.countryCode as FlagIconCode}
                                            size={16}
                                            className="rounded-full"
                                        />
                                        {country.currencyCode}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                    </div>
                </div>
                <div className=" items-center gap-3 hidden sm:flex">
                    <button className="px-4 py-2 bg-primary-700 text-primary-100 font-medium rounded-lg flex gap-2 items-center">
                        <Image src={`/send-2.png`} alt='send' width={20} height={20} />
                        Send Money
                    </button>

                    <Menu>
                        <MenuButton className="px-4 py-2 bg-primary-200  text-primary-800 font-medium rounded-lg flex gap-2 items-center">
                            <FaPlus color='#DBDFE5' />
                            Create New
                        </MenuButton>
                        {renderMenuItems()}

                    </Menu>
                </div>

            </div>
            <StatsCards />
            <div className=" items-center py-3 gap-3 justify-center flex sm:hidden">

                <button className="px-4 py-2 bg-primary-700 text-primary-100 text-xs font-medium rounded-lg flex gap-2 items-center">
                    <Image src={`/send-2.png`} alt='send' width={20} height={20} />
                    Send Money
                </button>

                <Menu>
                    <MenuButton className="px-4 py-2 bg-primary-200 text-xs text-primary-800 font-medium rounded-lg flex gap-2 items-center">
                        <FaPlus color='#DBDFE5' />
                        Create New
                    </MenuButton>
                    {renderMenuItems()}

                </Menu>

            </div>
        </>
    );
};

export default DashboardHeader;
