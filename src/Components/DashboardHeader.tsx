"use client";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { useState } from 'react';
import { FaEyeSlash, FaPlus } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import countryToCurrency from "country-to-currency";
import { TiArrowSortedDown } from "react-icons/ti";
import { FlagIcon } from "react-flag-kit";
import clsx from 'clsx'
import StatsCards from './StatsCards';
import Image from 'next/image';


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

    return (
        <>
            <div className="flex md:py-10 pt-8 justify-between items-end">
                <div>
                    <div className="flex gap-4 items-center">
                        <h1 className="text-2xl font-semibold">
                            {see ? `Hello Bob,` : `******`}
                        </h1>
                        <div onClick={toggleSee}>
                            {see ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-gray-500 text-xs md:text-base pt-1">
                            Overview of your activity in
                        </div>
                        <Listbox value={countryCode} onChange={handleChange}>
                            <ListboxButton className="flex justify-between p-1 bg-primary-300 gap-1 items-center relative w-fit border-l border-bg2-500">
                                <div className="flex items-center gap-1">
                                    <FlagIcon
                                        code={countryCode}
                                        size={16}
                                        className="rounded-full"
                                    />
                                    <span className="block truncate font-semibold text-xs sm:text-base">
                                        {selectedCurrency}
                                    </span>
                                </div>
                                <TiArrowSortedDown size={16} />
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom"
                                transition
                                className={clsx(
                                    'w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                )}
                            >
                                {countriez.map((country, index) => (

                                    <ListboxOption
                                        key={index}
                                        value={country.countryCode}
                                        className="group flex cursor-default items-center gap-2 bg-primary-300 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                                    >
                                        <FlagIcon
                                            code={country.countryCode}
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

                    <button className="px-4 py-2 bg-primary-200 text-primary-300 font-medium rounded-lg flex gap-2 items-center">
                        <FaPlus color='#DBDFE5' />
                        Create New
                    </button>
                </div>

            </div>
            <StatsCards />
            <div className=" items-center py-3 gap-3 justify-center flex sm:hidden">
                <button className="px-4 py-2 bg-primary-700 text-xs text-primary-100 font-medium rounded-lg flex gap-2 items-center">
                    <Image src={`/send-2.png`} alt='send' width={20} height={20} />
                    Send Money
                </button>

                <button className="px-4 py-2 bg-primary-200 text-xs text-primary-800 font-medium rounded-lg flex gap-2 items-center">
                    <FaPlus color='#DBDFE5' />
                    Create New
                </button>
            </div>
        </>
    );
};

export default DashboardHeader;
