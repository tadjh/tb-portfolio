import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Themes = "light" | "dark" | undefined;

export default function Theme() {
  const [theme, setTheme] = useState<Themes>(undefined);

  function enableDarkMode() {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setTheme("dark");
  }

  function disableDarkMode() {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    setTheme("light");
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return enableDarkMode();
    }

    return disableDarkMode();
  }, []);

  //   function deleteStorage() {
  //     localStorage.removeItem("theme");
  //     return setTheme(undefined);
  //   }

  function toggleTheme() {
    if (theme === "dark") return disableDarkMode();
    return enableDarkMode();
  }

  const icon = theme === "dark" ? faMoon : faSun;

  return (
    <span
      onClick={toggleTheme}
      className="cursor-pointer transition-transform hover:scale-125"
    >
      <FontAwesomeIcon
        icon={icon}
        className="h-4 w-10 text-black/90 dark:text-white/90"
      />
    </span>
  );
}
