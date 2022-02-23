import React, { useEffect, useState } from "react";



const addLocalStorage = (key: string, value: string) => {
    const [state, setState] = useState(() => {

        if (!value) {
            return;
        }
        try {
            const storageValue = localStorage.getItem(key);
            return storageValue ? JSON.parse(storageValue) : value
        } catch (error) {
            return value;
        }

    }
    )

    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(key, JSON.stringify(state))

            } catch (error) {
                console.log(error);
            }
        }

    }, [state, key]);

    return [state, setState];

};

export default addLocalStorage;