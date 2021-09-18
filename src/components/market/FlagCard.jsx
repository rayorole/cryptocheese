import React from "react";

import { EyeIcon } from "@heroicons/react/outline";

// Example flags
import EthIcon from "../../assets/ethereum.asset.svg";

export default function FlagCard(props) {
  return (
    <div className="w-11/12 mt-3 mb-3 p-2 rounded-md card-dark">
      <div className="flex font-josefin items-center text-gray-100">
        <img src={props.source} alt="Belgium" />
        <p className="ml-3 text-xl">{props.name}</p>
      </div>
      <div className="flex items-center font-josefin text-gray-100 justify-between mt-3">
        <div>
          <p className="text-md">Price: {props.price}</p>
        </div>
        <div className="flex">
          <a
            href={props.url}
            className="flex w-20 items-center justify-center about px-3 py-2 rounded-md"
          >
            <p className="font-ropa text-gray-100">View</p>
            <EyeIcon className="ml-2 flex-grow-0 flex-none" width="15" />
          </a>
          <button className="flex ml-2 w-20 items-center justify-center about px-3 py-2 rounded-md">
            <p className="font-ropa text-gray-100">Buy</p>
            <img src={EthIcon} className="ml-2" alt="Buy" />
          </button>
        </div>
      </div>
    </div>
  );
}
