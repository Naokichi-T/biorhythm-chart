import { useState } from "preact/hooks";

export const useLocalStorage = (key: string, defaultValue: string) => {
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
  const [value, setValue] = useState(getInitialValue);
  const setAndStoreValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValue];
};
