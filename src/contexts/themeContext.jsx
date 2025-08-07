import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [light, setlight] = useState(() => {
    const savedtheme = localStorage.getItem("theme");
    return savedtheme ? savedtheme === "light" : false;
  });

  const toggleTheme = () => {
    setlight((theme) => {
      const newTheme = !theme;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <ThemeContext.Provider value={{ light, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
