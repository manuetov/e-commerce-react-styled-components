import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  console.log("action", action);
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // if item is already in the cart, we iterate over & check item + color
    const tempItem = state.cart.find((item) => item === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        // it target item + color is, we increment the amount
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          // if the newAmount update last amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          // return all the properties with the new amount changed
          return { ...cartItem, amount: newAmount };
          // if item + color doesn't match, we don't anything to do & simply return de array
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      // if item is not in the cart, we create a new item
      const newItem = {
        id: id + color, // cartItemId
        name: product.name,
        amount,
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  // remove product from cart
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  // clear cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "increase") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "decrease") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
      return item;
      }
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
