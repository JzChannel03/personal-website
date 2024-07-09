"use client";
import IconSVG from "@/components/IconSVG";
import LightModeIcon from "@/public/assets/svg-icons/light-mode.svg";
import { changeTheme } from "@/app/utils/change-theme";

const ThemeMode = () => {
  return (
    <div className="absolute bottom-2 right-2">
      <IconSVG
        icon={LightModeIcon}
        className="text-yellow-400"
        allowDarkMode={false}
        onClick={() => {
          console.log("click");
          changeTheme();
        }}
      />
    </div>
  );
};

export default ThemeMode;
