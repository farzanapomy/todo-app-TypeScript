import {  useEffect, useState } from "react";

export const useLocalStorage = (
    defaultValue: [],
    key: string
) => {
    const [value, setValue] = useState(() => {
        const savedValue = window.localStorage.getItem(key);
        return savedValue  ? JSON.parse(savedValue) : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
};