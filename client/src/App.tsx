import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova-static.html") window.location.replace("/sopranova-static.html");
  }, []);
  return null;
}
