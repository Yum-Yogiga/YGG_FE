import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";

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
  const router = useRouter();
  const [idEntry, setIdEntry] = useState([]);
  const entryLength = idEntry.length;
  const [currentIndex, setCurrentIndex] = useState(1);

  const getCurrentId = () => {
    return idEntry[currentIndex];
  };

  const getNextEntry = () => {
    let newIndex = 1;
    if (currentIndex + 1 >= entryLength) newIndex = 0;
    else newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    router.push(`./${idEntry[newIndex]}`);
  };

  const getPreviousEntry = () => {
    let newIndex = 0;
    if (currentIndex - 1 < 0) newIndex = entryLength - 1;
    else newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    router.push(`./${idEntry[newIndex]}`);
  };

  const initialReroll = () => {
    const newEntry = new Set();
    while (newEntry.size < MAX_ENTRY_SIZE) {
      newEntry.add(getRandomInt(MIN_ID, MAX_ID));
    }
    const arrNewEntry = Array.from(newEntry);
    setIdEntry(arrNewEntry);
    setCurrentIndex(0);
    return arrNewEntry[0];
  };

  const reroll = () => {
    const newEntry = new Set();
    while (newEntry.size < MAX_ENTRY_SIZE) {
      newEntry.add(getRandomInt(MIN_ID, MAX_ID));
    }
    const arrNewEntry = Array.from(newEntry);
    setIdEntry(arrNewEntry);
    setCurrentIndex(0);
    router.push(`./${arrNewEntry[0]}`);
  };

  useEffect(() => {
    initialReroll();
  }, []);

  const value = {
    entryLength,
    currentIndex,
    getCurrentId,
    initialReroll,
    goNextPage: getNextEntry,
    goPreviousPage: getPreviousEntry,
    reroll,
  };

  return (
    <RestIdContext.Provider value={value}>{children}</RestIdContext.Provider>
  );
};
