"use client";
import { getFromLocalStorage } from "@/utils/localstorage";
import axios from "axios";
console.log(getFromLocalStorage("token"));

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
  // baseURL: "http://localhost:8443/api",

  headers: {
    "content-type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    Authorization: `Bearer ${typeof window !== "undefined" && window.localStorage.getItem("token")}`,
  },
});

export default backend;
