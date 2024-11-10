import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./TODO/Base/Logo";
import { NavMobile } from "./TODO/NavMobile";
import { NavDesktop } from "./TODO/NavDesktop";

type HeaderType = {
  status: "user" | "moderator" | "admin";
  className?: string;
};

const Header = ({ status, className }: HeaderType) => {
  return (
    <header className={cn(className, "flex justify-between")}>
      <div className="block sm:hidden">
        <NavMobile status={status} />
      </div>
      <div className="hidden sm:flex items-center justify-between w-full">
        <Logo />
        <NavDesktop status={status} />
      </div>
    </header>
  );
};

export default Header;
