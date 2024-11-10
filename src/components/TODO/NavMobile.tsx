import React from "react";
type NavMobileType = {
  status: "user" | "moderator" | "admin";
};

export const NavMobile = ({ status }: NavMobileType) => {
  return <div>NavMobile</div>;
};
