import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scrolling for route changes - smooth scroll is disorienting
    // when navigating between pages and can cause content to be missed
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}
