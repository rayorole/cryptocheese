import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Web3
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

// Styles
import "./styles/home.styles.css";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  const Home = React.lazy(() =>
    import(/* webpackChunkName: "Home" */ "./components/home/Home")
  );

  const viewFlag = React.lazy(() =>
    import(/* webpackChunkName: "viewFlag" */ "./components/market/Flag")
  );

  const connectWallet = React.lazy(() =>
    import(
      /* webpackChunkName: "connectWallet" */ "./components/connect-wallet/ConnectWallet"
    )
  );

  const Market = React.lazy(() =>
    import(/* webpackChunkName: "Market" */ "./components/market/Market")
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <React.Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/connect-wallet" component={connectWallet} />
            <Route exact path="/flags" component={Market} />
            <Route exact path="/flag/:id" component={viewFlag} />
            <Route component={Home} />
          </Switch>
        </React.Suspense>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
