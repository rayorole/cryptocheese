import React, { useEffect, useState } from "react";
import Header from "../header/Header";

// Assets
import MetamaskIcon from "../../assets/metamask.asset.png";
import FortmaticIcon from "../../assets/fortmatic.asset.png";
import PortisIcon from "../../assets/portis.asset.png";

import { ChevronRightIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { ScaleLoader } from "react-spinners";

// Web3
import {
  injected,
  fortmatic,
  portis,
  walletconnect,
} from "../../connectors/connector";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";

const Web3 = require("web3");

export default function ConnectWallet() {
  /* prettier-ignore */
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const [metamaskLoading, setMetamaskLoading] = useState(false);
  const [fortmaticLoading, setFortmaticLoading] = useState(false);
  const [portisLoading, setPortisLoading] = useState(false);

  async function connectWalletConnect() {
    try {
      activate(walletconnect);
      console.log(account);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectFortmatic() {
    try {
      setFortmaticLoading(true);
      await activate(fortmatic);
      setFortmaticLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectFortmatic() {
    try {
      await deactivate(fortmatic);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectMetamask() {
    try {
      setMetamaskLoading(true);
      await activate(injected);
      setMetamaskLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectMetamask() {
    try {
      await deactivate(injected);
      console.log(connector);
    } catch (e) {
      console.log(e);
    }
  }

  async function connectPortis() {
    try {
      setPortisLoading(true);
      await activate(portis);
      setPortisLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnectPortis() {
    try {
      await deactivate(portis);
      console.log(portis);
    } catch (e) {
      console.log(e);
    }
  }

  async function getWeb3Info() {
    async function getFortmaticAcc() {
      try {
        let acc = await fortmatic.getAccount();
        return "Fortmatic account: " + acc;
      } catch (e) {
        return "Fortmatic not connected";
      }
    }

    async function getMetamaskAcc() {
      try {
        let acc = await injected.getAccount();
        return "Metamask account: " + acc;
      } catch (e) {
        return "Injected not connected";
      }
    }

    async function getPortisAcc() {
      try {
        let acc = await portis.getAccount();
        return "Portis account: " + acc;
      } catch (e) {
        return "Portis not connected";
      }
    }
    console.log(await getPortisAcc());
    console.log(await getMetamaskAcc());
    console.log(await getFortmaticAcc());
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <body>
        <section className="about w-11/12 mx-auto mt-5 rounded-lg p-3 text-white font-josefin font-medium flex flex-col">
          <div>
            <div className="flex items-center">
              <ChevronRightIcon className="mr-1 -mt-1" width="16" />
              Connect to a wallet
            </div>
          </div>
          <div>
            <div
              onClick={active ? disconnectMetamask : connectMetamask}
              className="flex font-poppins border-2 border-darkgray mt-4 items-center rounded-lg py-3 wallet-options justify-between px-5"
            >
              {metamaskLoading ? (
                <ScaleLoader color="white" radius={2} width={4} height={7} />
              ) : (
                <p>Metamask</p>
              )}
              <img width="32" src={MetamaskIcon} alt="" />
            </div>
            <div
              onClick={active ? disconnectFortmatic : connectFortmatic}
              className="flex font-poppins border-2 border-darkgray mt-2 items-center rounded-lg py-3 wallet-options justify-between px-5"
            >
              {fortmaticLoading ? (
                <ScaleLoader color="white" radius={2} width={4} height={7} />
              ) : (
                <p>Fortmatic</p>
              )}
              <img width="32" src={FortmaticIcon} alt="" />
            </div>
            <div
              onClick={active ? disconnectPortis : connectPortis}
              className="flex font-poppins border-2 border-darkgray mt-2 items-center rounded-lg py-3 wallet-options justify-between px-5"
            >
              {portisLoading ? (
                <ScaleLoader color="white" radius={2} width={4} height={7} />
              ) : (
                <p>Portis</p>
              )}
              <img width="32" src={PortisIcon} alt="" />
            </div>
          </div>
        </section>
        <section className="flex justify-center mt-2">
          <a
            href="/"
            className="text-white hover:underline text-sm font-ropa flex"
          >
            Or continue without wallet
            <ArrowRightIcon className="ml-1" width="12" />
          </a>
        </section>
        <button onClick={getWeb3Info}>Click</button>
      </body>
    </div>
  );
}
