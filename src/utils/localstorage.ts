"use client";

export const saveToLocalStorage = (
  key: string,
  value: unknown,
  event?: React.ChangeEvent<Element>,
) => {
  if (typeof window !== "undefined") {
    event?.preventDefault();
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  return false;
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return false;
};
