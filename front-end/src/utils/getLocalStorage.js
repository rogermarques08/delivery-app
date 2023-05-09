export default function getLocalStorage(name) {
  const storage = JSON.parse(localStorage.getItem(name));

  return storage;
}
