// Utility/AddToDB.js

const STORAGE_KEY = "readList";

// -- Get Data from localStorage --
const GetStoredData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

// -- Add book to read list --
const AddToStoreDB = (id) => {
  const storedData = GetStoredData();

  if (storedData.includes(id)) {
    return false; // already exists
  }

  storedData.push(id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
  return true;
};

export { AddToStoreDB, GetStoredData };
