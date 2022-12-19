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

// checking product is in cart or not
const isInCart = (state, id) => {
  const isIn = !!state.selectedItems.find((item) => item.id === id);

  return isIn;
};

// checking product quantity
const quantity = (state, id) => {
  const productIndex = state.selectedItems.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return false;
  } else {
    return state.selectedItems[productIndex].quantity;
  }
};

export { getWindowSize, toFarsiNumber, isInCart, quantity };
