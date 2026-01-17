import { useState, createContext, useContext, useEffect } from "react";

const themeContext = createContext();


function ThemeChange() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#000';
    document.body.style.color = theme === 'light' ? '#000' : '#fff';
  }, [theme])
  
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <ToolBar />
      </themeContext.Provider>
    </>
  );
}

function ToolBar() {
  return <ThemeButton />;
}

function ThemeButton() {
  const {theme, setTheme} = useContext(themeContext);
  const style = {
    backgroundColor: theme === "light" ? "#000" : "#fff",
    color: theme === 'light' ? "#fff" : "#000"
  }
  return (
    <button onClick={() => setTheme( theme === "light" ? "dark" : "light")} style={style}>
      Theme Changes to {theme}
    </button>
  );
}

export default ThemeChange;
