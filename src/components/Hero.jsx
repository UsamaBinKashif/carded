import clsx from "clsx";
import React from "react";
import { discount, robot } from "../assets";
import styles from "../utils/style";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <div
      id="home"
      className={clsx("flex md:flex-row flex-col", styles.paddingY)}
    >
      <div
        className={clsx(
          "flex-1 flex-col xl:px-0 sm:px-16 px-6",
          styles.flexStart
        )}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount-icon"
            className="w-[32px]  h-[32px]"
          />
          <p className={clsx("ml-2", styles.paragraph)}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="w-full font-semibold ss:text-[60px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
          Payment Method.
        </h1>
        <p className={clsx("max-w-[470px] mt-5", styles.paragraph)}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={clsx(
          "flex-1 flex  md:my-0 my-10 relative",
          styles.flexCenter
        )}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] invert"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={clsx("ss:hidden", styles.flexCenter)}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
