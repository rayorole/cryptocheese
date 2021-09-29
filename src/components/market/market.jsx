import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

// HeroIcons
import { ChevronRightIcon } from "@heroicons/react/outline";
import { AdjustmentsIcon } from "@heroicons/react/outline";

import LoadingSkeleton from "./LoadingCard";
import FlagCard from "./FlagCard";

// Dummy flag
import DummyFlag from "../../assets/flags/belgium.flag.svg";

// Styles
import "../../styles/market.styles.css";

export default function Market() {
  const FlagObj = {
    name: "Belgium",
    price: "82K",
    source: DummyFlag,
    url: "/flag/1",
  };

  return (
    <div>
      <Header />
      <body className="mx-auto w-11/12">
        <div className="flex text-white font-josefin justify-between items-center mt-5">
          <div className="flex text-lg">
            <ChevronRightIcon className="-mt-1 mr-1" color="white" width="20" />
            All flags
          </div>
          <div className="flex items-center">
            <button className="p-1 px-2 flex items-center border font-ropa border-white rounded-md">
              Filter
              <AdjustmentsIcon className="ml-1" width="20" />
            </button>
          </div>
        </div>
        <section className="about pt-3 w-full flex flex-col items-center justify-center rounded-md mx-auto mt-4">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </section>
      </body>
      <Footer />
    </div>
  );
}
