import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_BfERYNYNJBEPAtHSTwVo0D6j00Gtt6eyZR";
	const onToken = (token) => {
		console.log(token);
		alert("Payment successful!");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="S Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
