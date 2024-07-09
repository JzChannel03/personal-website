import Link from "next/link";
import { SVGProps } from "react";
import clsx from "clsx";

interface IconSVGProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
  linkUrl?: string;
  props?: SVGProps<SVGSVGElement>;
  allowDarkMode?: boolean;
}

/**
 * IconSvg component renders an SVG icon with optional link and additional properties.
 *
 * @param {IconSVGProps} props - The properties for the component.
 * @param {React.FC<React.SVGProps<SVGSVGElement>>} props.icon - The SVG component to be rendered.
 * @param {React.MouseEventHandler<SVGSVGElement>} [props.onClick] - Click event handler for the SVG icon.
 * @param {string} [props.className] - Additional CSS classes to apply to the SVG icon.
 * @param {string} [props.linkUrl] - URL to wrap the SVG icon in a Next.js Link component.
 * @param {SVGProps<SVGSVGElement>} [props.props] - Additional SVG props.
 * @param {boolean} [props.allowDarkMode=true] - Flag to allow dark mode styles.
 *
 * @returns {JSX.Element} The rendered SVG icon, optionally wrapped in a Next.js Link component.
 */
const IconSvg: React.FC<IconSVGProps> = ({
  icon: Icon,
  className = "",
  onClick,
  linkUrl,
  allowDarkMode = true,
  props,
}) => {
  const svgClassNames = clsx(
    className,
    "cursor-pointer transform hover:shadow-md hover:duration-300 hover:scale-110",
    allowDarkMode ? "dark:text-white text-black" : ""
  );

  const iconElement = (
    <Icon
      className={svgClassNames}
      width={30}
      height={30}
      onClick={onClick}
      {...props}
    />
  );

  if (linkUrl) {
    return <Link href={linkUrl}>{iconElement}</Link>;
  }

  return iconElement;
};

export default IconSvg;
