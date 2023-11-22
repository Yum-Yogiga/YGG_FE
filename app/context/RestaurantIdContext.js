import { createContext, useContext, useEffect, useState } from "react";

const MAX_ENTRY_SIZE = 5;
const MAX_ID = 500;
const MIN_ID = 1;

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RestIdContext = createContext({});

export const useRestId = () => {
    return useContext(RestIdContext);
};

export const RestIdProvider = ({ children }) => {
    const [idEntry, setIdEntry] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);

    const getNextEntry = () => {
        if (currentIndex < MAX_ENTRY_SIZE - 1) {
            const newIndex = currentIndex++;
            setCurrentIndex(newIndex);
            return idEntry[newIndex];
        }
    };

    const getPreviousEntry = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex--;
            setCurrentIndex(newIndex);
            return idEntry[newIndex];
        }
    };

    const reroll = () => {
        const newEntry = new Set();

        while (newEntry.size < MAX_ENTRY_SIZE) {
            newEntry.add(getRandomInt(MIN_ID, MAX_ID));
        }
        setIdEntry(Array.from(newEntry));
    };

    useEffect(() => {
        reroll();
    }, []);

    const value = {
        entry: idEntry,
        currentIndex,
        reroll,
        getNextEntry,
        getPreviousEntry,
    };

    return <RestIdContext.Provider value={value}>{children}</RestIdContext.Provider>;
};
