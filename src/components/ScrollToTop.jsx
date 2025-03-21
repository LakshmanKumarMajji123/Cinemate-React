import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


/**
 * Above whole is copied from "www.v5.react.router.com" lo "scrollRestoration" field lodhi code
 * above code executed in "main.jsx"
 * 
 * 
 * <StrictMode>
    <Router>
    <ScrollToTop /> just put above of the app <App />
      <App />
    </Router>
  </StrictMode>
 */