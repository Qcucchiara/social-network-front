import React from "react";
type NavDesktopType = {
  status: "user" | "moderator" | "admin";
};
export const NavDesktop = ({ status }: NavDesktopType) => {
  return <div>NavDesktop</div>;
};
