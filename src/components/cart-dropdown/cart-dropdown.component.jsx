import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = ({ cartItems }) => {
  console.log("CartItem", cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CustomButton>Pagar</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
