"use client";
import { ListPosts } from "@/components/ListPosts";
import { handlePublication } from "@/services/social-network/social-network.publication";
import { getFromLocalStorage } from "@/utils/localstorage";
import React, { useEffect, useState } from "react";

const page = () => {
  return <ListPosts skip={0} take={10} sort={"date"} />;
};

export default page;
