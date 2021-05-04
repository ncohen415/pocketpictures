import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOP_NAME,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
})

const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {}, //Default function
  client,
  checkout: {
    lineItems: [],
  },
  checkPromo: () => {},
  updateQuantityInCart: () => {},
  removeItemTypeFromCart: () => {},
}

//Store Context
export const StoreContext = createContext(defaultValues)

//Check if it's a browser
const isBrowser = typeof window !== "undefined"

//Store Provider
export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)

  const toggleCartOpen = () => setCartOpen(!isCartOpen)

  //when StoreProvider runs for the first time, run initializeCheckout().
  useEffect(() => {
    initializeCheckout()
  }, [])

  //Post Checkout - reset cart after completed order
  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  const initializeCheckout = async () => {
    //PERSISTENT CART
    try {
      //check if ID exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null
      if (currentCheckoutId) {
        //if ID exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        //if ID does not, create new checkout
        //CREATE NEW CHECKOUT
        newCheckout = await getNewId()
      }
      //set checkout to state
      setCheckout(newCheckout)
    } catch (e) {
      console.log(e)
    }
  }

  //PASS SHOPIFY ID
  const addProductToCart = async variantId => {
    try {
      //CREATE LINE ITEMS
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      //ADD LINE ITEMS TO CHECKOUT
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      setCheckout(newCheckout)
      // console.log(addItems.webUrl)
    } catch (e) {
      console.error(e)
    }
  } //Function Override

  //Update Cart Items
  const updateQuantityInCart = async (item, value) => {
    try {
      let updatedLineItems = {
        id: item.id,
        quantity: value,
        variantId: item.variant.id,
      }

      const newCheckout = await client.checkout.updateLineItems(
        checkout.id,
        updatedLineItems
      )
      setCheckout(newCheckout)
    } catch (e) {
      console.log(e.message)
    }
  }

  //Remove All of One Item From Cart

  const removeItemTypeFromCart = async lineItemId => {
    try {
      const newCheckout = await client.checkout.removeLineItems(
        checkout.id,
        lineItemId
      )
      setCheckout(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  const checkPromo = async promoCode => {
    const newCheckout = await client.checkout.addDiscount(
      checkout.id,
      promoCode
    )
    setCheckout(newCheckout)
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
        checkout,
        toggleCartOpen,
        isCartOpen,
        updateQuantityInCart,
        removeItemTypeFromCart,
        checkPromo,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
