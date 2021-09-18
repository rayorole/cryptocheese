import React from "react";
import { useWeb3React } from "@web3-react/core";

import EthWallet from "../../assets/ethereum-wallet.asset.svg";

export default function ConnectWalletBtn() {
  /* prettier-ignore */
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  return (
    <div>
      {active ? (
        <p>Connected</p>
      ) : (
        <div className="flex">
          <img className="mr-2" src={EthWallet} alt="Wallet"></img>
          <p>Connect wallet</p>
        </div>
      )}
    </div>
  );
}
