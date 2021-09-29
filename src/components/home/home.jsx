import React, { useState, useEffect } from "react";

// Others
import { motion } from "framer-motion";

// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ConnectWallet from "../connect-wallet/ConnectWallet";

// Heroicons
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";

// Assets
import WorldImageSvg from "../../assets/world.asset.svg";
import FlagExample from "../../assets/united-states-flag.asset.svg";
import EthIcon from "../../assets/ethereum.asset.svg";
import DiscordIcon from "../../assets/discord.asset.png";
import TwitterIcon from "../../assets/twitter.asset.png";
import InstagramIcon from "../../assets/instagram.asset.png";

require("dotenv").config();

export default function Home() {
  let currentYear = new Date().getFullYear();
  const [walletModal, setWalletModal] = useState(true);

  return (
    <div>
      <div className="body">
        <Header />
        <body>
          <section className="h-52">
            <img
              className="top-0 z-0 absolute right-0 overflow-x-hidden"
              src={WorldImageSvg}
              alt="Flagnation world"
            />
            <div className="z-10 mt-12 ml-2">
              <div className="font-poppins font-semibold text-gray-50 w-72 text-md p-2">
                <h2
                  onClick={() => console.log(process.env.FORTMATIC_KEY)}
                  className=""
                >
                  The first flag marketplace on the Ethereum blockchain
                </h2>
              </div>
              <div className="m-2 mt-4">
                <a
                  href="/flags"
                  className="p-2 shadow-xl pl-3 pr-3 rounded-md font-ropa text-gray-200 border border-white"
                >
                  Explore
                </a>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="flex flex-col mx-auto text-center items-center text-white font-josefin pb-5 w-10/12">
              <h2 className="text-xl mt-5 mb-3">What is Flagnation?</h2>
              <div>
                <p className="font-montserrat text-white text-sm text-left">
                  Flagnation is a decentralized market where you can buy all
                  kinds of flags. There will be a total of 10,000 flags with
                  proof of ownership stored on the Ethereum blockchain.
                </p>
                <p className="font-montserrat text-white text-sm mt-4 text-left">
                  Flagnation is an NFT inspired by the{" "}
                  <a
                    href="https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    ERC-721
                  </a>{" "}
                  token standard.
                </p>
              </div>
            </div>
          </section>
          <section className="">
            <div className="flex flex-col mx-auto text-white font-josefin pb-5 w-11/12">
              <h2 className="text-xl mt-5 mb-3 text-center">Latest activity</h2>
              <div className="text-left">
                <table class="rounded-lg table-fixed whitespace-nowrap w-11/12">
                  <thead>
                    <tr>
                      <th class="w-2/6">Event</th>
                      <th class="w-1/4 truncate">From</th>
                      <th class="w-1/4">To</th>
                      <th align="right" class="w-1/4">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Minted</td>
                      <td className="w-1/4 truncate">
                        0x0502C8E38FE95c639A76AF42AEA09e910c1f02a7
                      </td>
                      <td className="w-8 truncate">
                        0x0502C8E38FE95c639A76AF42AEA09e910c1f02a7
                      </td>
                      <td align="right">21 Jan</td>
                    </tr>
                    <tr class="w-12 truncate">
                      <td>Transfer</td>
                      <td>0x0502</td>
                      <td>0x0502</td>
                      <td align="right">12 Sept</td>
                    </tr>
                    <tr>
                      <td>Sale</td>
                      <td>0x0502</td>
                      <td>0x0502</td>
                      <td align="right">15 Aug</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="z-30 trending mb-11">
            <div className="flex flex-col text-center items-center text-white font-josefin pb-5">
              <h2 className="text-xl mt-3 mb-3">Trending flags</h2>
              <div className="flex items-center">
                <div>
                  <ChevronLeftIcon className="mr-1" width="25" height="25" />
                </div>
                <div className="p-3 rounded-md card-dark">
                  <div className="flex items-center">
                    <div>
                      <img src={FlagExample} alt="Flag" />
                    </div>
                    <div className="ml-3">United States</div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>Price: 2.4M</div>
                    <div className="flex ml-5">
                      <a
                        href="/flags/1"
                        className="flex light-button rounded-md p-1 mr-2 pr-1"
                      >
                        <EyeIcon width="16" className="mr-1" />
                        View
                      </a>
                      <a
                        href="/flags/1"
                        className="flex light-button rounded-md p-1 pr-2"
                      >
                        <img
                          src={EthIcon}
                          className="w-4 h-4 mr-1 mt-1 flex"
                          alt=""
                        />
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon className="ml-1" width="25" height="25" />
                </div>
              </div>
            </div>
          </section>
          <ConnectWallet open={walletModal} />
          <Footer />
        </body>
      </div>
    </div>
  );
}
