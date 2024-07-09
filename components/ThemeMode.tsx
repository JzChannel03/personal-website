"use client";
import IconSVG from "@/components/IconSVG";
import LightModeIcon from "@/public/assets/svg-icons/light-mode.svg";
import { changeTheme } from "@/app/utils/change-theme";

const ThemeMode = () => {
  return (
    <div className="absolute bottom-2 right-2">
      <IconSVG
        onClick={() => {
          console.log("click");
          changeTheme();
        }}
        className="text-yellow-400"
        icon={LightModeIcon}
        alt="Light Mode"
      />
    </div>
  );
};

export default ThemeMode;
