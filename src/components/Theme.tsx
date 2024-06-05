import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

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
    <div onClick={handleClick} className="flex-1 cursor-pointer">
      <FontAwesomeIcon
        icon={icon}
        className="h-4 w-10 text-black/90 transition-transform hover:scale-125 dark:text-white/90"
      />
    </div>
  );
}
