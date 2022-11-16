// get window size
const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

// convert english number to farsi
const toFarsiNumber = (num) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export { getWindowSize, toFarsiNumber };
