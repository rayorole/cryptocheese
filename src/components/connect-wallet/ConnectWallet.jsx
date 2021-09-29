import React, { useEffect, useState } from "react";
import Header from "../header/Header";

import Fortmatic from "fortmatic";
import Portis from "@portis/web3";

// Assets
import MetamaskIcon from "../../assets/metamask.asset.png";
import FortmaticIcon from "../../assets/fortmatic.asset.png";
import PortisIcon from "../../assets/portis.asset.png";

import { XIcon } from "@heroicons/react/outline";
import { ScaleLoader } from "react-spinners";

const Web3 = require("web3");
let web3 = new Web3("http://localhost:7545");

const fm = new Fortmatic("pk_live_F0B704FD20C1445A");
const portis = new Portis("d32803d3-0c01-4de4-b652-6ca80a1e74cb", "mainnet");

export default function ConnectWallet(props) {
  const [metamaskLoading, setMetamaskLoading] = useState(false);
  const [fortmaticLoading, setFortmaticLoading] = useState(false);
  const [portisLoading, setPortisLoading] = useState(false);

  const setMWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(web3.givenProvider.selectedAddress);
    } else {
      alert("Metamask not found or initialized!");
    }
  };

  const setFWallet = async () => {
    web3 = await new Web3(fm.getProvider());
    await web3.currentProvider.enable();
    web3.eth.getAccounts((error, accounts) => {
      if (error) throw error;
      console.log(accounts); // ['0x...']
    });
  };

  const setPWallet = async () => {
    web3 = await new Web3(portis.provider);
    await web3.currentProvider.enable();
    web3.eth.getAccounts((error, accounts) => {
      if (error) throw error;
      console.log(accounts); // ['0x...']
    });
  };

  return (
    <div>
      {props.open ? (
        <div className="w-screen connectwallet-div card-dark rounded-t-2xl p-2 h-80 fixed bottom-0 flex flex-col">
          <div className="flex text-white font-poppins font-semibold justify-between items-center">
            <h1 className="ml-4">Connect to a wallet</h1>
            <XIcon width="32" height="32" color="white" />
          </div>
          <div className="mt-4 text-white text-lg font-josefin">
            <div
              onClick={setMWallet}
              className="about cursor-pointer wallet-card w-11/12 mx-auto p-3 rounded-lg flex justify-between items-center"
            >
              <h2>Metamask</h2>
              <div>
                <img src={MetamaskIcon} width="40" alt="Metamask" />
              </div>
            </div>
            <div
              onClick={setFWallet}
              className="about cursor-pointer wallet-card w-11/12 mx-auto p-3 mt-2 rounded-lg flex justify-between items-center"
            >
              <h2>Fortmatic</h2>
              <div>
                <img src={FortmaticIcon} width="40" alt="Metamask" />
              </div>
            </div>
            <div
              onClick={setPWallet}
              className="about cursor-pointer wallet-card w-11/12 mx-auto p-3 mt-2 rounded-lg flex justify-between items-center"
            >
              <h2>Portis</h2>
              <div>
                <img src={PortisIcon} width="40" alt="Metamask" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
