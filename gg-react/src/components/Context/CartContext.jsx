import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({
  cart: [],
  cartPrice: 0,
  setCartPrice: 0,
  addToCart: () => {},
  handleCart: () => {},
  removeFromCart: () => {},
  handleCartForm: () => {},
  itemIsInCart: (meetupId) => {},
  open: false,
  formOpen: false,
  total: 0,
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    handleCartPrice()
  }, [open])

  const addToCart = (e, i) => {
    const itemInCart = itemIsInCart(i.id)

    if(itemInCart) {
      removeFromCart(i.id)
    } else {
      const cardContent = {
          name: i.name,
          genre: i.genre,
          image: i.image,
          price: i.price,
          id: i.id
      }
      const inCart = cart.filter((c) => c.id === cardContent.id)
      if(inCart.length > 0) return
      setCart([
          ...cart, cardContent
      ])
      setCartPrice((prevValue) => parseFloat(prevValue) + parseFloat(cardContent.price))
    }
  }

  const removeFromCart = (e) => {
    const filtered = cart.filter((c) => c.id !== e)
    const filteredDelete = cart.filter((c) => c.id === e)
    const price = filteredDelete.map((cost) => {
        return cost.price
    })
    setCart(filtered)
    if(filtered.length === 0) {
        setCartPrice(0)
    } else {
        setCartPrice((prevValue) => parseFloat(prevValue) - parseFloat(price))
    }
  }

  const itemIsInCart = (meetupId) => {
    return cart.some((meetup) => meetup.id === meetupId)
}

  const handleCart = () => {
    setOpen(!open);
    setCartPrice(0)
  }

  const handleCartForm = () => {
    setFormOpen(!formOpen)
  }

  const handleCartPrice = () => {;
    cart.map((c) => {
        setCartPrice((prevValue) => parseFloat(prevValue) + parseFloat(c.price))
    })
  }

  const context = {
      cart: cart,
      cartPrice: cartPrice,
      setCartPrice: setCartPrice,
      total: cart?.length,
      open: open,
      formOpen: formOpen,
      handleCartForm: handleCartForm,
      addToCart: addToCart,
      handleCart: handleCart,
      removeFromCart: removeFromCart,
      itemIsInCart: itemIsInCart,
  }

  return (
      <CartContext.Provider value={context}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartContext;