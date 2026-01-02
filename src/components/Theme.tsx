import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") ?? "dark";
    }
    return "dark";
  });

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", nextTheme);
    }

    setTheme(nextTheme);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div onClick={handleClick} className="flex-1 cursor-pointer">
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="h-4 w-10 text-black/90 transition-transform hover:scale-125 dark:text-white/90"
      />
    </div>
  );
}
