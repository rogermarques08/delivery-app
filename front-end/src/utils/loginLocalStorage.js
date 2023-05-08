export default function setLogin(data) {
  localStorage.setItem('user', JSON.stringify(data));
}
