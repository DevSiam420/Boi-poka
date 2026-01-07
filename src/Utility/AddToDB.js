// Get all stored read book ids
const GetStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");

  if (storedBookStr) {
    return JSON.parse(storedBookStr);
  }
  return [];
};

// -- 

const AddToStoreDB = (id) => {
  const storedBookData = GetStoredBook();

  if (storedBookData.includes(id)) {
    alert("Book already marked as Read!");
    return;
  }

  storedBookData.push(id);
  localStorage.setItem("readList", JSON.stringify(storedBookData));
};

export { GetStoredBook, AddToStoreDB };
