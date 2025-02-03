import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  textClass?: string;
}

const DoubelLayerButton: FC<ButtonProps> = ({ href, children, className = "", textClass = "" }) => {
  return (
    <Link href={href} className={`button w-inline-block block ${className}`} data-faitracker-click-bind="true">
      <div className={`button-text is-nav ${textClass}`}>{children}</div>
    </Link>
  );
};

export default DoubelLayerButton;
