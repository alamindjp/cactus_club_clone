import Image from "next/image";
import Raffles from "../../../assets/image/Raffles.png";
import Transactions from "../../../assets/image/Transactions.png";
import ExclusiveStar from "../../../assets/image/exclusiveStar.png";

const Offer = () => {
  return (
    <div className="container mx-auto mt-[136px] px-[15px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 justify-items-center items-center">
        <div className="w-[340px] card-shadow text-center justify-center rounded-lg relative h-[311px] md:h-[388px] mb-[69px]">
          <h1 className="text-[28px] uppercase text-secondary-title font-poppins font-semibold leading-[44px] pt-[34px]">
            Exclusive Raffles
          </h1>
          <p className=" text-secondary-title font-normal text-base font-poppins leading-relaxed pl-[25.97px] pr-[31.39px]">
            Gain extra chances to win with our raffle draws. The more you play
            the more chances to win!
          </p>
          <Image
            className="absolute w-[126px] md:w-[210px] ml-[110px] md:ml-[65px] bottom-[-41px]"
            src={Raffles}
            alt=""
          />
        </div>
        <div className="w-[340px] card-shadow text-center justify-center rounded-lg relative h-[311px] md:h-[388px] mb-[69px]">
          <h1 className=" text-[28px] uppercase text-secondary-title font-poppins font-semibold leading-[44.80px] pt-[34px] sm:text-[28px]">
            Effortless Transactions
          </h1>
          <p className=" text-secondary-title font-normal text-base font-poppins leading-relaxed pl-[25.97px] pr-[31.39px]">
            Forget about gas fees and focus on the fun with our managed wallets!
          </p>
          <Image
            className="absolute w-[126px] md:w-[210px] ml-[110px] md:ml-[65px] bottom-[-41px]"
            src={Transactions}
            alt=""
          />
        </div>
        <div className="w-[340px] card-shadow text-center justify-center rounded-lg relative h-[311px] md:h-[388px] mb-[69px]">
          <h1 className=" text-[28px] uppercase text-secondary-title font-poppins font-semibold leading-[44.80px] pt-[34px] sm:text-[28px]">
            Low House Edge
          </h1>
          <p className=" text-secondary-title font-normal text-base font-poppins leading-relaxed pl-[25.97px] pr-[31.39px]">
            Win more with us with our low house edge starting at 1%
          </p>
          <Image
            className="absolute w-[126px] md:w-[210px] ml-[110px] md:ml-[65px] bottom-[-41px]"
            src={ExclusiveStar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
