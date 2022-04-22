import React, {useEffect} from "react";

export const useOutsideClicker = (ref, callback, ignoreRef) => {
    const handleOutsideClick = (event) => {
        const {current} = ref || {};
        if (current && !current?.contains(event.target) && !ignoreRef?.current?.contains(event.target) && callback) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });
};

