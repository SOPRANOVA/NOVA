import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova-final.html") {
      window.location.replace("/sopranova-final.html");
    }
  }, []);
  return null;
}
