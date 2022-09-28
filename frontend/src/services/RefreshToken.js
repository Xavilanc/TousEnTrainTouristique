import jwtDecode from "jwt-decode";

function isAuthenticated() {
  const token = localStorage.getItem("token");

  try {
    jwtDecode(token);
    // const { exp } = jwtDecode(token);
    // if ( exp * 1000 = new Date().getTime()) {
    //   return false;
    // }
  } catch (err) {
    return false;
  }
  return true;
}
export default isAuthenticated();
