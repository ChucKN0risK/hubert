import { useThemeContext } from "../../../hooks/useTheme";

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={toggle}>{theme}</button>
  )
};

export default ThemeSwitcher;