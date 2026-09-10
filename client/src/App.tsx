import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.pathname !== "/reference.html") {
      window.location.replace("/reference.html");
    }
  }, []);

  return null;
}
