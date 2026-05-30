'use client';

import Image from "next/image";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg";

export interface LandingHeaderRootProps
  extends React.HTMLAttributes<HTMLElement> {
  size?: Size;
  bordered?: boolean;
  sticky?: boolean;
  maxWidthClassName?: string;
}

const Root: React.FC<LandingHeaderRootProps> = ({
  size = "md",
  bordered = false,
  sticky = true,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "w-full flex justify-center z-80 py-1",
        "bg-white/95 backdrop-blur-xl text-foreground",
        "[&_a]:font-secondary [&_button]:font-secondary [&_span]:font-secondary",
        sticky && "sticky top-0",
        bordered && "border-b border-[#0F0E1A]/[0.07]",
        className
      )}
      style={{
        fontFamily:
          "var(--font-montserrat), Montserrat, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <header
        {...rest}
        className={clsx("w-full text-foreground", "px-3 max-w-7xl")}
      >
        <div
          className={clsx(
            "mx-auto flex w-full items-center justify-between gap-3",
            size === "sm" && "h-14",
            size === "md" && "h-16",
            size === "lg" && "h-20"
          )}
        >
          {children}
        </div>
      </header>
    </div>
  );
};

export interface LeftProps {
  className?: string;
  children?: React.ReactNode;
}
const Left: React.FC<LeftProps> = ({ className, children, ...rest }) => (
  <div {...rest} className={clsx("min-w-0 flex items-center gap-2", className)}>
    {children}
  </div>
);

export interface CenterProps {
  className?: string;
  children?: React.ReactNode;
}
const Center: React.FC<CenterProps> = ({ className, children, ...rest }) => (
  <nav
    {...rest}
    className={clsx(
      "hidden md:flex min-w-0 flex-1 items-center justify-center",
      className
    )}
    aria-label="Navegação principal"
  >
    {children}
  </nav>
);

export interface RightProps {
  className?: string;
  children?: React.ReactNode;
}
const Right: React.FC<RightProps> = ({ className, children, ...rest }) => (
  <div
    {...rest}
    className={clsx("min-w-0 flex items-center justify-end gap-2", className)}
  >
    {children}
  </div>
);

export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ src, alt, className }) => (
  <Image
    src={src}
    alt={alt}
    width={120}
    height={36}
    className={clsx("block h-7 w-auto sm:h-8 lg:h-9 select-none", className)}
  />
);

const Nav: React.FC<{ className?: string; children?: React.ReactNode }> & {
  Item: React.FC<{
    href?: string;
    target?: string;
    onClick?: () => void;
    children: React.ReactNode;
    active?: boolean;
  }>;
} = ({ className, children }) => (
  <ul className={clsx("flex w-full items-center gap-6 overflow-x-auto !font-secondary", className)}>
    {children}
  </ul>
);

Nav.Item = ({ href = "#", target, onClick, children, active }) => (
  <li>
    <a
      href={href}
      target={target}
      onClick={onClick}
      className={clsx(
        "!font-secondary relative inline-flex whitespace-nowrap pb-1 text-left text-sm font-medium",
        "text-[#0F0E1A]/60 transition-colors duration-200 hover:text-[#0F0E1A]",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary-500 after:transition-transform after:duration-300 after:ease-out after:content-['']",
        "hover:after:scale-x-100 focus-visible:after:scale-x-100",
        active && "text-[#0F0E1A] after:scale-x-100"
      )}
    >
      {children}
    </a>
  </li>
);
Nav.Item.displayName = "LandingHeaderNavItem";

interface CTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CTA: React.FC<CTAProps> = ({ className, label, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "font-secondary inline-flex items-center justify-center rounded-xl",
        "bg-primary-400 text-white",
        "hover:opacity-90 transition-opacity duration-200",
        "px-5 py-2.5 text-xs font-bold uppercase tracking-widest",
        className
      )}
    >
      {label}
    </button>
  );
};

const MobileMenuToggle: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    open?: boolean;
    onToggle?: (open: boolean) => void;
  }
> = ({ open, onToggle, className, ...rest }) => (
  <button
    aria-label="Abrir/fechar menu"
    onClick={() => onToggle?.(!open)}
    {...rest}
    className={clsx(
      "flex md:invisible h-9 w-9 md:w-0 md:h-0 items-center justify-center rounded-xl",
      "text-[#0F0E1A]/60 hover:text-[#0F0E1A] hover:bg-[#0F0E1A]/[0.05] transition-colors duration-200",
      className
    )}
  >
    {open ? <XIcon className="h-5 w-5" /> : <ListIcon className="h-5 w-5" />}
  </button>
);

const MobileMenuPanel: React.FC<{
  open?: boolean;
  children?: React.ReactNode;
  cta?: React.ReactNode;
}> = ({ open, children, cta }) => {
  if (!open) return null;
  return (
    <div className="md:hidden absolute left-0 right-0 top-full z-30 w-full border-b border-[#0F0E1A]/[0.07] bg-white/98 backdrop-blur-xl shadow-sm transition">
      <div className="mx-auto max-w-7xl px-3 py-4">
        <ul className="flex flex-col items-center gap-3">{children}</ul>
        {cta && <div className="mt-4">{cta}</div>}
      </div>
    </div>
  );
};

const LandingHeader = {
  Root,
  Left,
  Center,
  Right,
  Logo,
  Nav,
  CTA,
  MobileMenuToggle,
  MobileMenuPanel,
};

export default LandingHeader;
