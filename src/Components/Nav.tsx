"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    FaBell,
    FaCaretDown,
    FaPlus,
    FaSignOutAlt,
} from "react-icons/fa";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose, IoPerson } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems, Switch } from "@headlessui/react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from "next/link";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [enabled, setEnabled] = useState(false)

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const toggleSubMenu = () => setSubMenuOpen((prev) => !prev);

    const renderSubMenu = () => (
        <div className="w-60 mt-4 z-50 ml-4 flex flex-col space-y-2 origin-top-right rounded-xl border border-primary-100/40 bg-white px-3 py-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
            {["Logged In", "", ""].map((status, index) => (
                <div
                    key={index}
                    className="flex gap-3 items-center cursor-pointer border-b pb-2"
                    onClick={toggleSubMenu}
                >
                    <div className="size-8 rounded-full border border-primary-100/40" />
                    <div>
                        <h3 className="text-sm text-black font-medium">
                            Vance Refrigeration
                        </h3>
                        {status && <p className="text-xs text-green-400">{status}</p>}
                    </div>
                </div>
            ))}
            <button
                onClick={toggleSubMenu}
                className="py-2 w-full rounded-lg space-x-3 border border-primary-100/40 flex justify-center items-center"
            >
                <FaPlus color="#873bff" />
                <h3 className="text-primary-100 font-medium">Add Business</h3>
            </button>
        </div>
    );

    const renderMenuItems = () => (
        <MenuItems
            transition
            anchor="bottom end"
            className="w-60 mt-4 z-50 flex flex-col space-y-4 origin-top-right rounded-xl border border-primary-100/40 bg-white px-3 py-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
            <MenuItem>
                <div
                    onClick={toggleSubMenu}
                    className="p-2 flex justify-between cursor-pointer items-center rounded bg-primary-400"
                >
                    <div>
                        <h3 className="text-sm text-black font-medium">Switch Account</h3>
                        <p className="text-xs text-black/40">Access your other business</p>
                    </div>
                    <FaCaretDown color="black" />
                </div>
            </MenuItem>
            <MenuItem>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <IoPerson color="#98A2B3" />
                    <p className="text-black">Manage Account</p>
                </div>
            </MenuItem>
            <MenuItem>
                <div className="flex items-center pb-2 space-x-2 cursor-pointer">
                    <FaSignOutAlt color="#98A2B3" />
                    <p className="text-black">Logout</p>
                </div>
            </MenuItem>
        </MenuItems>
    );

    return (
        <div className="py-5 border-b z-50 bg-white md:px-8 px-4  flex items-center justify-between">
            <div className="flex gap-2 items-center pr-10">
                <Image src={"/next.svg"} alt="logo" width={22} height={24} />
                <h1 className="font-medium text-bg-100 text-2xl">Tradevu</h1>
            </div>
            <div className="md:flex space-x-10 hidden items-center">
                {["Dashboard", "Pay", "Finance", "Flex"].map((item, index) => (
                    <div className={`flex gap-1 hover:text-primary-100 cursor-pointer ${index === 0 && "text-primary-100  font-semibold"}`} key={item}>
                        {index === 0 && <Image alt="home" src={`/home.png`} width={24} height={26} />}
                        <Link href={"#"}>{item}</Link>
                    </div>
                ))}
            </div>
            <div className="flex space-x-6 items-center">
                <Popover>
                    <PopoverButton>
                        <div className="relative">
                            <FaBell size={32} color="#DBDFE5" />
                            <div className="bg-green-500 absolute top-1 lg:right-0 text-xs text-white rounded-full size-2 -right-1 flex items-center justify-center" />
                        </div>
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                    >
                        <div className="w-96 bg-white shadow-lg rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Notifications</h2>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-primary-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary-300"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-primary-100 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                                    />
                                </Switch>
                            </div>
                            <div className="mt-4 space-y-4">
                                {/* Notification 1 */}
                                <div className="flex items-start space-x-2">
                                    <span className="bg-green-500 rounded-full h-2 w-2 mt-2"></span>
                                    <div>
                                        <p className="font-medium text-sm line-clamp-1">S&B Inc. signed the lender’s agreement</p>
                                        <p className="text-xs text-gray-500">Just now</p>
                                    </div>
                                </div>
                                {/* Notification 2 */}
                                <div className="flex items-start space-x-2">
                                    <span className="bg-green-500 rounded-full h-2 w-2 mt-2"></span>
                                    <div>
                                        <p className="font-medium text-sm line-clamp-1">Humphrey & Co. confirmed your purchase order #21</p>
                                        <p className="text-xs text-gray-500">04:27 pm</p>
                                    </div>
                                </div>
                                {/* Notification 3 */}
                                <div className="flex items-start space-x-2">
                                    <div className="bg-gray-400 rounded-full h-2 w-2 mt-2"></div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-700 line-clamp-1">You received $20 from Bass Industries</p>
                                        <p className="text-xs text-gray-500">Yesterday</p>
                                    </div>
                                </div>
                                {/* Notification 4 */}
                                <div className="flex items-start space-x-2">
                                    <div className="bg-gray-400 rounded-full h-2 w-2 mt-2"></div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-700 line-clamp-1">Archibald Holdings completed payment for Invoice #46</p>
                                        <p className="text-xs text-gray-500">09/02/2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </PopoverPanel>
                </Popover>

                <div className="lg:flex space-x-2 items-center hidden">
                    <div className="size-8 rounded-full border border-primary-100/40" />
                    <Menu>
                        <MenuButton className="flex items-start space-x-2">
                            <h2 className="font-medium">Richard O.</h2>
                            <IoIosArrowDown />
                        </MenuButton>
                        {renderMenuItems()}
                        <div className="relative">
                            <div className="absolute top-1 right-8">
                                {subMenuOpen && renderSubMenu()}
                            </div>
                        </div>
                    </Menu>
                </div>
                <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                    <FiMenu size={32} />
                </div>
            </div>
            <div
                className={`${menuOpen
                    ? "fixed right-0 top-0 md:w-[45%] w-[100%] lg:hidden h-screen bg-white px-4 pt-6 ease-in duration-500"
                    : "fixed right-[-100%] top-0 w-[65%] p-10 ease-in duration-500"
                    } z-50`}
            >
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center pr-10">
                        <Image src={"/next.svg"} alt="logo" width={22} height={24} />
                        <h1 className="font-bold text-lg">Tradevu</h1>
                    </div>
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <IoClose size={32} />
                    </div>
                </div>
                <div className="flex-col justify-end items-end space-y-6 flex pt-10 pr-4">
                    {["Dashboard", "Play", "Finance", "Flex"].map((item, index) => (
                        <div className={`flex gap-1 ${index === 0 && "text-primary-100 font-semibold"}`} key={item}>
                            {index === 0 && <BiSolidHomeAlt2 size={24} color="#873BFF" />}
                            <Link href={"#"}>{item}</Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-end pt-8 pr-4">
                    <div className="flex space-x-2 items-center">
                        <div className="size-8 rounded-full border border-primary-100/40" />
                        <Menu>
                            <MenuButton className="flex items-start space-x-2">
                                <h2 className="font-medium">Richard O.</h2>
                                <IoIosArrowDown />
                            </MenuButton>
                            {renderMenuItems()}
                        </Menu>
                    </div>
                </div>
                {subMenuOpen && renderSubMenu()}
            </div>
        </div>
    );
};

export default Nav;
