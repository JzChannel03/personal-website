"use client";

import MediumIcon from "../public/assets/svg-icons/medium.svg";
import GithubIcon from "../public/assets/svg-icons/github.svg";
import LinkedinIcon from "../public/assets/svg-icons/linkedin.svg";
import TwitterIcon from "../public/assets/svg-icons/twitter.svg";
import LightModeIcon from "../public/assets/svg-icons/light-mode.svg";
import Image from "next/image";
import JoseVenturaImg from "../public/assets/images/z-logo-dev.webp";
import IconSVG from "./IconSVG";

const MyPerfil = () => {
  return (
    <div className="bg-white dark:bg-black rounded-l-2xl p-5 flex flex-row justify-between items-center w-11/12 h-full">
      <div className="flex flex-row gap-3">
        <IconSVG icon={MediumIcon} linkUrl="https://medium.com/@jzchannel03" />
        <IconSVG icon={GithubIcon} />
        <IconSVG icon={LinkedinIcon} />
        <IconSVG icon={TwitterIcon} />
        <IconSVG
          icon={LightModeIcon}
          className="text-yellow-400"
          allowDarkMode={false}
        />
      </div>
      <h5 className="dark:text-white">Jose Ventura</h5>
      <Image
        src={JoseVenturaImg}
        className="rounded-full"
        width={50}
        height={50}
        alt="Jose Ventura"
      />
    </div>
  );
};

export default MyPerfil;
