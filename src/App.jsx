import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "./styles/home.styles.css";

function App() {
  const Home = React.lazy(() =>
    import(/* webpackChunkName: "Home" */ "./components/home/home")
  );

  const viewFlag = React.lazy(() =>
    import(/* webpackChunkName: "Home" */ "./components/market/flag")
  );

  return (
    <Router>
      <React.Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flag/:id" component={viewFlag} />
          <Route component={Home} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
