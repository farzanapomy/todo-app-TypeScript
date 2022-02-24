import { useState, useEffect } from "react";

function getLocalStorage(key: string, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");
  return localStorage.getItem(key)
    ? savedValue
    : initialValue instanceof Function
    ? initialValue()
    : initialValue;
}


export default function useLocal<S>(key: string, initialValue: S) {
  const [value, setValue] = useState(() =>
    getLocalStorage(key, initialValue)
  );

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value]
  );

  return [value, setValue];
}

