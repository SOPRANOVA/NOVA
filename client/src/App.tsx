import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/sopranova-control.html") {
      window.location.replace("/sopranova-control.html");
    }
  }, []);
  return null;
}
