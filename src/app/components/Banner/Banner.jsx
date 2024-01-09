import React from "react";
import hero_bg from "../../../assets/image/banner-bg.svg";
import hero_bg_mobile from "../../../assets/image/hero_bg_mobile.png";
import Image from "next/image";
import bg_cactus from "@/assets/image/banner_cactus.svg";
import Link from "next/link";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="relative top-16">
      <Image src={hero_bg} alt="Snow" className="hidden md:block w-full" />
      <Image src={hero_bg_mobile} alt="Snow" className="block md:hidden w-full" />
      <div className="absolute z-[1] bottom-0 left-0">
        <Image src={bg_cactus} alt="" className="w-full" />
      </div>
      <div className="z-[2] absolute top-[40px] lg:top-[154.36px] px-4 lg:px-[145px]">
        <h1 className="text-[40px] md:text-[50px] lg:text-[80px] font-rubik text-white shadow-text uppercase font-normal md:leading-[60px]">
          Cactus Club
        </h1>
        <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-rubik text-white shadow-text uppercase font-normal md:leading-[60px] pt-[5px]">
          get stuck on the fun!
        </h1>
        <p className="banner-text-color font-poppins font-semibold text-[16px] uppercase pt-[10px]">
          quench your thirst on our growing lineup of crypto games!
        </p>
        <Link href="/" className="flex items-center mt-[40px] md:mt-[32px] w-full justify-center md:block md:w-min">
          <Button label="Deposit & Play" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
