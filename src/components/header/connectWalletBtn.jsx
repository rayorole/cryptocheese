import React, { useState, useEffect } from "react";
import Fortmatic from "fortmatic";

import EthWallet from "../../assets/ethereum-wallet.asset.svg";
import { ScaleLoader, SyncLoader } from "react-spinners";

const Web3 = require("web3");
const fm = new Fortmatic("pk_live_F0B704FD20C1445A");
let web3 = new Web3("http://localhost:7545");

export default function ConnectWalletBtn() {
  /* prettier-ignore */
  const [address, setAddress] = useState(window.ethereum ? web3.givenProvider.selectedAddress : false);
  const [walletLoading, setWalletLoading] = useState(false);

  useEffect(() => {
    setFortmatic();
  }, []);

  const setFortmatic = async () => {
    let isUserLoggedIn = await fm.user.isLoggedIn();
    if (isUserLoggedIn === true) {
      await setWallet();
      console.log(await web3.eth.net.getId());
    } else {
      console.log(await web3.eth.net.getId());
    }
  };

  const setWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      await setAddress(account);
      console.log(web3.givenProvider.selectedAddress);
    } else {
      setWalletLoading(true);
      console.log("Metamask not detected, switching to Fortmatic");
      web3 = await new Web3(fm.getProvider());
      await web3.currentProvider.enable();
      web3.eth.getAccounts((error, accounts) => {
        if (error) throw error;
        console.log(accounts); // ['0x...']
        setAddress(accounts);
      });
      setWalletLoading(false);
    }
  };

  const disconnectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setAddress(account);
      console.log(web3.givenProvider.selectedAddress);
    } else {
      let isUserLoggedIn = await fm.user.isLoggedIn();
      console.log(isUserLoggedIn);
    }
  };

  if (typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", function (accounts) {
      setWallet();
    });

    window.ethereum.on("networkChanged", function (networkId) {
      window.location.reload();
    });
  }

  function walletNotLoading() {
    return (
      <div onClick={address ? disconnectWallet : setWallet}>
        {address ? (
          <p className="w-24 truncate">{address}</p>
        ) : (
          <div className="flex">
            <img className="mr-2" src={EthWallet} alt="Wallet"></img>
            <p>Connect wallet</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {walletLoading ? (
        <div>
          <ScaleLoader
            color="white"
            speedMultiplier={1}
            width={8}
            height={8}
            radius={3}
            margin={2}
          />
        </div>
      ) : (
        walletNotLoading()
      )}
    </div>
  );
}
