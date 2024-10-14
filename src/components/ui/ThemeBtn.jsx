import { useTheme } from "@/contexts/themeContext";
import { MoonIcon, Sun } from "lucide-react";

const ThemeBtn = () => {
  const { themeMode, toggleThemeMode } = useTheme();
  return (
    <div>
      <button
        className="text-black dark:bg-white bg-black rounded-full ml-2 mt-2"
        onClick={toggleThemeMode}
      >
        <p className="py-2 px-2">
          {" "}
          {themeMode === "dark" ? (
            <Sun size={25} fill="black" />
          ) : (
            <MoonIcon size={25} fill="white" />
          )}
        </p>
      </button>
    </div>
  );
};

export default ThemeBtn;
