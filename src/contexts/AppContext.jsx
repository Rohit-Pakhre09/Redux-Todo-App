import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Theme State.
  const [light, setLight] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : false;
  });

  // Modal View State.
  const [view, setView] = useState(false);
  const toggleView = () => {
    setView(!view);
  };

  const toggleTheme = () => {
    setLight((theme) => {
      const newTheme = !theme;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <AppContext.Provider value={{ light, view, toggleView, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
