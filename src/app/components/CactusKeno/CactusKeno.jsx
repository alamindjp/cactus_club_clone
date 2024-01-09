import Link from "next/link";
import CactusBG from "../../../assets/image/Rectangle282.png";
import CactusBGMid from "../../../assets/image/cactus_bg_images_mid.png";
import Image from "next/image";
import Button from "../Button/Button";

const CactusKeno = () => {
  return (
    <section className="relative xl:min-h-[614px] md:mt-[50px] xl:mt-[127px]">
      <div className="">
        <div className="w-full xl:w-[400px] z-[2] pl-[5px] md:pl-[50px] xl:pl-0">
          <div className="mt-[20px] xl:pt-[147px] mb-[30px] xl:mb-0 xl:pl-[150px]">
            <div className="flex xl:block  md:items-center sm:text-center flex-row gap-x-5">
              <h1 className="cactus-text-color font-rubik uppercase text-[32px] md:text-[60px] font-normal">
                cactus
              </h1>
              <h1 className="cactus-text-color font-rubik uppercase text-[32px] md:text-[60px] font-normal">
                Keno
              </h1>
            </div>
            <p className="text-[16px] font-normal font-IBM">
              Pick your lucky numbers and hold your breath as the results get
              revealed one at a time. Did you hit the hail Mary or get hung out
              to dry?!
            </p>
            <div className="hidden md:block pt-[30px] md:pt-[40px]">
              <Link href="/">
                <Button label="play now" />
              </Link>
            </div>
          </div>
          <div className="hidden xl:block absolute top-0 right-0 w-[945px]">
          <Image src={CactusBG} alt="asda" className="ml-[94px]" />
        </div>
        <div className="block xl:hidden w-[100%] pl-[5px] md:pl-[50px]">
          <Image src={CactusBGMid} alt="" className="w-full" />
        </div>
        </div>
      </div>

      <div className="block md:hidden pt-[30px] md:pt-[40px]">
        <Link href="/">
          <Button label="play now" />
        </Link>
      </div>
    </section>
  );
};

export default CactusKeno;
