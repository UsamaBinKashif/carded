import clsx from "clsx";
import React from "react";
import { arrowUp } from "../assets";
import styles from "../utils/style";
styles;
const GetStarted = () => {
  return (
    <div
      className={clsx(
        "w-[140px] h-[140px] rounded-full bg-lime-gradient p-[2px]",
        styles.flexCenter
      )}
    >
      <div
        className={clsx(
          "flex-col bg-primary w-full h-full rounded-full",
          styles.flexCenter
        )}
      >
        <div className={clsx("flex-row mr-2", styles.flexStart)}>
          <p className="font-medium text-[18px] leading-[23px]">
            <span className="text-gradient mr-1">Get </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-icon"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
