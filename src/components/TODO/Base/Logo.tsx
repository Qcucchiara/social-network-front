import { cn } from "@/lib/utils";
import { ClassValue } from "class-variance-authority/types";
import React from "react";
type LogoType = {
  className?: ClassValue;
};

export const Logo = ({ className }: LogoType) => {
  return <div className={cn(className, "")}>Logo</div>;
};
