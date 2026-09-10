import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova-exact.html") window.location.replace("/sopranova-exact.html");
  }, []);
  return null;
}
