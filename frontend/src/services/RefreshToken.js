import jwtDecode from "jwt-decode";

function isAuthenticated() {
  const token = localStorage.getItem("token");

  try {
    jwtDecode(token);
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
}
export default isAuthenticated();
