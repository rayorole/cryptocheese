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
    import(/* webpackChunkName: "Home" */ "./components/home/home")
  );

  const viewFlag = React.lazy(() =>
    import(/* webpackChunkName: "Home" */ "./components/market/flag")
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <React.Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/flag/:id" component={viewFlag} />
            <Route component={Home} />
          </Switch>
        </React.Suspense>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
