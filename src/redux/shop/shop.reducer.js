import SHOP_DATA from "../../utils/data/shop.data";

const INITIAL_STATE = {
  dataCollection: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
