import React from "react"
import { loadStripe } from "@stripe/stripe-js/pure"

const Index = () => {

  const stripePromise = loadStripe('pk_test_nlvhXwM4AjzbLYqjg6sczYE100f72CUKSk');

  const checkoutButton = async (e) => {
    e.preventDefault()

    const stripe = await stripePromise;
    stripe
      .redirectToCheckout({
        items: [
          // Replace with the ID of your SKU
          { sku: "sku_H9mWzTYAh0yRlu", quantity: 1 }
        ],
        successUrl: "http://127.0.0.1:8000/success",
        cancelUrl: "http://127.0.0.1:8000/error"
      })
      .then(function(result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      })

  }

  return (
    <div>
      <button onClick={checkoutButton}>
        Pay
      </button>
    </div>
  )
}

export default Index
