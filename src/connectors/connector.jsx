import { InjectedConnector } from "@web3-react/injected-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

require("dotenv").config();

export const injected = new InjectedConnector({
  supportedChainIds: [1],
});

export const portis = new PortisConnector({
  dAppId: "d32803d3-0c01-4de4-b652-6ca80a1e74cb",
  networks: [1],
});

export const fortmatic = new FortmaticConnector({
  apiKey: "pk_live_F0B704FD20C1445A",
  chainId: 1,
});

export const walletconnect = new WalletConnectConnector({
  chainId: 1,
  qrcode: true,
  pollingInterval: 10,
});
