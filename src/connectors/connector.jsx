import { InjectedConnector } from "@web3-react/injected-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1],
});

export const fortmatic = new FortmaticConnector({
  apiKey: "pk_live_F0B704FD20C1445A",
  chainId: 1,
});
