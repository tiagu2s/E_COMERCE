import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
//TELLS TO USE LOCAL STORAGE
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:'root',
  storage,
  // reduce to persist
  whitelist:['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})


export default persistReducer(persistConfig, rootReducer)
