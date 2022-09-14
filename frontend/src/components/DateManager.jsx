export const getDate = () => {
  const d = new Date();
  const myDate = `${d.getFullYear()}-${
    d.getMonth() + 1
  }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return myDate;
};

export const transDate = (date) => {
  const myDate1 = date.split("T");
  const myDate2 = myDate1[0].split("-");
  let myDate3 = myDate1[1].split(".");
  myDate3 = myDate3[0].split(":");
  const years = myDate2[0];
  const month = myDate2[1];
  const day = myDate2[2];
  const hours = myDate3[0];
  const min = myDate3[1];
  const sec = myDate3[2];
  return `${day}-${month}-${years} ${hours}h${min}m${sec}s`;
};
