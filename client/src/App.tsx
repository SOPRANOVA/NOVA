import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova.html") {
      window.location.replace("/sopranova.html");
    }
  }, []);
  return null;
}
