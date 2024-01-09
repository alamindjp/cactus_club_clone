"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/icons/CactusClub.png";
import { NavItem } from "@/assets/NavbarItems";
import barIcon from "@/assets/icons/ion_menu.svg";
import xIcon from "../../../assets/icons/x.svg";
import RightIcon from "@/assets/icons/chevron-right.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 z-[100]">
      <div className="flex md:flex-row justify-between h-[78px] items-center px-[5px] xl:px-[145px] lg:px-[50px] md:px-[20px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="hidden md:flex md:items-center justify-between flex-col md:flex-row py-[12px] md:py-0">
          {NavItem.map(({ id, name, link }) => (
            <li key={id} className="mr-[24px] py-[5px] md:py-0">
              <Link
                className="font-poppins text-[14px] font-semibold text-link uppercase tracking-[2px]"
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
          <div className="flex">
            <li className="lg:ml-[24px] md:ml-[12px] py-[12px] md:py-0">
              <Link
                href="/login"
                className="bg-orange-primary text-white font-poppins text-[14px] font-semibold uppercase py-[10px] px-[12px] rounded-md"
              >
                log in
              </Link>
            </li>
            <li className="md:pl-[8px] py-[12px] md:py-0">
              <Link
                href="/"
                className="button__custom text-white font-poppins text-[14px] font-semibold  uppercase py-[10px] px-[12px]"
              >
                sign up
              </Link>
            </li>
          </div>
        </ul>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className={`block md:hidden h-[44px]  w-[44px] rounded-md ${!openMenu? 'bg-link2': ''}`}
        >
          <Image src={!openMenu ? barIcon : xIcon} className="mx-auto" alt="" />
        </button>

        {/* Mobile View */}
        {openMenu ? (
          <ul className="flex absolute top-[100%] bg-white left-0 right-0 md:hidden justify-between flex-col md:flex-row py-[12px] md:py-0 rounded-b-[30px] px-[20px]">
            <div className="pb-5">
            <h2 className="text-2xl font-extrabold uppercase text-primary-title font-rubik ml-[20px]">
              menu
            </h2>
            </div>
            {NavItem.map(({ id, name, link }) => (
              <li key={id} className="mr-[24px] ml-[20px] py-[5px] md:py-0">
                <Link
                  className="font-poppins text-[14px] font-semibold text-link uppercase tracking-[2px] flex justify-between pb-[16px]"
                  href={link}
                >{name} <Image src={RightIcon} alt="" /></Link>
              </li>
            ))}
            <li className="lg:ml-[24px] mb-2 mx-[20px] text-center bg-orange-primary rounded-md md:ml-[12px] py-[12px] md:py-0">
              <Link
                href="/login"
                className=" text-white font-poppins text-[14px] font-semibold uppercase py-[10px] px-[12px]"
              >
                log in
              </Link>
            </li>
            <li className="md:pl-[8px] mx-[20px] text-center mb-[45px] button__custom py-[12px] md:py-0">
              <Link
                href="/sign-up"
                className=" text-white font-poppins text-[14px] font-semibold  uppercase py-[10px] px-[12px]"
              >
                sign up
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
