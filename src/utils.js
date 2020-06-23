export const numFormat = (str) => {
  return str.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
