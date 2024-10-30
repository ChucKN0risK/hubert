import { useContext } from "react";
import { ThemeContext } from "../../../hooks/useTheme";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={toggleTheme}>{theme}</button>
  )
};

export default ThemeSwitcher;