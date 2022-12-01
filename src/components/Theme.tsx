import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Themes = "light" | "dark" | undefined;

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const icon = theme === "light" ? faMoon : faSun;

  return (
    <span
      onClick={handleClick}
      className="cursor-pointer transition-transform hover:scale-125"
    >
      <FontAwesomeIcon
        icon={icon}
        className="h-4 w-10 text-black/90 dark:text-white/90"
      />
    </span>
  );
}
