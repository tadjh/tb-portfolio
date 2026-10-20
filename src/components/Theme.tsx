import "../config/fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

export default function Theme() {
  // Start unset so server and client render the same markup, then read the
  // theme the inline script in BaseHead already applied.
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex-1">
      <Toggle
        aria-label="Dark mode"
        pressed={theme === "dark"}
        onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
        className="text-black/90 dark:text-white/90"
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="h-4 w-10 transition-transform hover:scale-125"
        />
      </Toggle>
    </div>
  );
}
