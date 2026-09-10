import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova-v2.html") {
      window.location.replace("/sopranova-v2.html");
    }
  }, []);
  return null;
}
