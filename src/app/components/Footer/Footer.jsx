import Image from "next/image";
import footerImage from "../../../assets/image/cactus_long1.png";
import { NavItem } from "../../../assets/NavbarItems";
import Button from "../Button/Button";
import Link from "next/link";
import facebookIcon from "../../../assets/icons/facebook_icon.svg";
import tweeterIcon from "../../../assets/icons/tweeter_icon.svg";
import instagramIcon from "../../../assets/icons/instagram_icon.svg";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container mx-auto md:px-[60px] lg:px-[120px] pt-[73px] pb-[24px]">
        <div className="flex items-center flex-col lg:justify-items-between md:flex-row md:justify-center">
          <Image src={footerImage} alt="" />
          <div className="flex justify-between flex-col lg:flex-row">
            <p className="xl:self-baseline text-center md:text-start font-poppins text-[18px] font-normal w-[100%] md:w-[370px] md:ml-[50px]">
              Subscribe to our newsletter to get all the insights on crypto and
              gaming. We’ll also keep you up to date on the latest releases and
              promotions at the Cactus Club!
            </p>
            <div className="xl:self-baseline md:ml-28 lg:ml-10 xl:ml-40">
              <Button
                label="subscribe"
                classes="px-12 my-[48px] md:my-0 md:px-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row mt-0 md:mt-[55px] border-lime-900 border-b border-opacity-20">
          <h3 className="font-luckiest uppercase text-3xl font-normal text-center text-green-700">
            Cactus Club
          </h3>
          <div className="flex md:hidden justify-center pt-7 ">
            <Link href="/"><Image src={facebookIcon} className="cursor-pointer" alt="" /></Link>
            <Link href="/"><Image
              src={tweeterIcon}
              className="cursor-pointer block mx-4"
              alt=""
            /></Link>
            <a href="/"><Image src={instagramIcon} className="cursor-pointer" alt="" /></a>
          </div>
          <div className="flex lg:justify-between md:justify-items-center flex-col md:flex-row mt-5 md:mt-0">
            {NavItem.map(({ id, name, link }) => (
              <div
                key={id}
                className="border-lime-900 border-opacity-20 lg:border-0 md:border-b text-center py-3 md:ml-3"
              >
                <Link
                  key={id}
                  className="md:ml-3 uppercase font-poppins font-semibold text-stone-800 text-center"
                  href={link}
                >
                  {name}
                  <div className="w-20 shadow-sm mx-auto block md:hidden border-separate border-b border-lime-900 border-opacity-20 lg:border-0 md:border-b text-center py-1 md:ml-3"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row mt-[22px]">
          <div className="block mx-auto md:mx-0">
            <Link
              className="text-lime-950 font-poppins lg:ml-0 md:ml-[20px] mr-[30px] md:mr-[84px]"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link className="text-lime-950 mr-[20px] font-poppins" href="/">
              Terms Of Service
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
            <Link href="/"><Image src={facebookIcon} className="cursor-pointer" alt="" /></Link>
            <Link href="/"><Image
              src={tweeterIcon}
              className="cursor-pointer block mx-4"
              alt=""
            /></Link>
            <a href="/"><Image src={instagramIcon} className="cursor-pointer" alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
