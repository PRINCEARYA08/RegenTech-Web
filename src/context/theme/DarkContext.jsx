import { createContext, useState, useContext } from "react";

// Create context store
export const darkContextStore = createContext(null);

// create context provider

export const DarkContextProvider = ({ children }) => {
  // dark theme logic
  const [dark, setDark] = useState(false);
  const theme = document.documentElement.classList;
  const themeHandler = () => {
    if (dark) {
      theme.remove("dark");
      theme.add("light");
    } else {
      theme.add("dark");
      theme.remove("light");
    }

    setDark((prev) => !prev);
  };

  return (
    <darkContextStore.Provider value={{ dark, setDark, themeHandler }}>
      {children}
    </darkContextStore.Provider>
  );
};

// custom hook for use dark mood in every level of components

export const useDark = () => {
  const dark = useContext(darkContextStore);
  return dark;
};