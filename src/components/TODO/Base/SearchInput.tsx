import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const SearchInput = () => {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
};
