"use client";
import { useEffect } from "react";

const ThemeProvider = () => {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return null;
};

export default ThemeProvider;
