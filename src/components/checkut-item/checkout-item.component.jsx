import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10006;</div>
    </div>
  );
};

export default CheckoutItem;
