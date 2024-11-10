import { cn } from "@/lib/utils";
import React from "react";
type LogoType = {
  className?: string;
};

export const Logo = ({ className }: LogoType) => {
  return <div className={cn(className, "")}>Logo</div>;
};
