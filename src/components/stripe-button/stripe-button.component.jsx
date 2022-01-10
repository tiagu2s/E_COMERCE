import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KGKqYB2kubsXaMEdC6RcfZ1NkcuSEFBkI6b3cOTXQM890nUzHcI2C2fsNMiE4548EiU3VCpLywthGunClxDMaiV00WnthCIkp";

  const onToken = (token) => {
    console.log(token);
    alert("Pagamento bem sucedido!!");
  };

  return (
    <StripeCheckout
      label="Pagar"
      name="Best Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`O total é de ${price}`}
      amount={priceForStripe}
      panelLabel="Pagar"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    />
  );
};

export default StripeCheckoutButton;
