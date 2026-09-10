import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect } from "react";

function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return <div key={location} className="page-transition">{children}</div>;
}

export default function App() {
  return <PageTransition><Switch>
    <Route path="/" component={Home} />
    <Route path="/details/:id" component={Detail} />
    <Route component={Home} />
  </Switch></PageTransition>;
}
