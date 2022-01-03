import PreviewCollection from "../../components/preview-collection/preview-collection";
import SHOP_DATA from "../../utils/data/shop.data";

const Shop = () => {
  const dataCollection = SHOP_DATA;
  return (
    <div className="shop-page">
      {dataCollection.map(({ id, ...otherData }) => (
        <PreviewCollection key={id} {...otherData} />
      ))}
    </div>
  );
};

export default Shop;
