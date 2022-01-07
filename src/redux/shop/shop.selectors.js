import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.dataCollection
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //GET ALL THE KEYS OF AN OBJECT(Object.keys(collections)) AND MAPING AN ARRAY OF IT
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
