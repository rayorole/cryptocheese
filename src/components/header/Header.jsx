import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

import {
  MoonIcon,
  XIcon,
  MenuAlt3Icon,
  InformationCircleIcon,
  ChatAlt2Icon,
  CodeIcon,
} from "@heroicons/react/outline";

import { SyncLoader } from "react-spinners";
import ConnectWalletBtn from "./connectWalletBtn";

import {
  injected,
  fortmatic,
  portis,
  walletconnect,
} from "../../connectors/connector";
import { useWeb3React } from "@web3-react/core";

import EthIcon from "../../assets/ethereum.asset.svg";

export default function Header() {
  /* prettier-ignore */
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  return (
    <div>
      <header className="flex sm:pt-4 p-2 sm:pb-4 sm:items-center justify-between">
        <div>
          <a
            href="/"
            className="text-white font-medium font-francois text-3xl sm:text-4xl"
          >
            Flagnation
          </a>
        </div>
        <div className="sm:flex hidden justify-between text-center bg-navbar rounded-xl">
          <div className="flex font-ropa text-gray-200 p-2">
            <div className="pl-2 pr-2 bg-active-navbar rounded-md">
              <a href="/">Home</a>
            </div>
            <div className="pl-2 pr-2">
              <a href="/market">Market</a>
            </div>
            <div className="pl-2 pr-2">
              <a href="/account">Account</a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex">
          <div className="p-2 mr-2 cursor-pointer z-10 rounded-md show-more-icon font-ropa flex justify-center text-white items-center">
            <a href="/connect-wallet">
              <ConnectWalletBtn />
            </a>
          </div>
          <motion.div
            className="z-20 relative"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    as="div"
                    className="p-2 cursor-pointer z-10 rounded-md show-more-icon flex justify-center items-center"
                  >
                    <div>
                      {open ? (
                        <XIcon width="24" height="24" color="white" />
                      ) : (
                        <MenuAlt3Icon width="24" height="24" color="white" />
                      )}
                    </div>
                  </Menu.Button>

                  {open && (
                    <Menu.Items
                      as={motion.div}
                      static
                      animate={{ opacity: 1, height: "auto" }}
                      initial={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute focus:outline-none cursor-pointer mt-1 right-0 show-more-icon w-32 rounded-md font-ropa"
                    >
                      <Menu.Item className="flex p-2 pb-1 items-center text-gray-200 hover:text-gray-50">
                        <div>
                          <InformationCircleIcon
                            width="20"
                            height="20"
                            className="mr-2"
                          />
                          <motion.div whileHover={{ x: 3 }}>Info</motion.div>
                        </div>
                      </Menu.Item>
                      <Menu.Item
                        as="div"
                        className="flex p-2 pb-1 items-center text-gray-200 hover:text-gray-50"
                      >
                        <CodeIcon width="20" height="20" className="mr-2" />
                        <motion.div whileHover={{ x: 3 }}>Code</motion.div>
                      </Menu.Item>
                      <Menu.Item
                        as="div"
                        className="flex p-2 pb-1 items-center text-gray-200 hover:text-gray-50"
                      >
                        <ChatAlt2Icon width="20" height="20" className="mr-2" />
                        <motion.div whileHover={{ x: 3 }}>Discord</motion.div>
                      </Menu.Item>
                      <Menu.Item
                        as="div"
                        className="flex p-2 pb-2 items-center text-gray-200 hover:text-gray-50"
                      >
                        <MoonIcon width="20" height="20" className="mr-2" />
                        <motion.div whileHover={{ x: 3 }}>Theme</motion.div>
                      </Menu.Item>
                    </Menu.Items>
                  )}
                </>
              )}
            </Menu>
          </motion.div>
        </div>
      </header>
    </div>
  );
}
