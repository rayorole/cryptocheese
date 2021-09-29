import React from "react";

import ReactIcon from "../../assets/react.asset.svg";
import EthColorIcon from "../../assets/ethereum-color.asset.svg";
import TailwindIcon from "../../assets/tailwindcss.asset.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer w-full sm:pt-4 p-2 sm:pb-4 sm:items-center text-white">
        <div className="flex items-center justify-between">
          <div className="font-francois flex items-center">
            <div>Flagnation</div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xs mr-2">Made with</p>
            <img className="mr-1" src={ReactIcon} alt="React" />
            <img className="mr-1" src={EthColorIcon} alt="Ethereum" />
            <img src={TailwindIcon} alt="TailwindCSS" />
          </div>
        </div>
      </footer>
    </div>
  );
}
