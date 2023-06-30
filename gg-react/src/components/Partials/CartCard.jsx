import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext'
import { setCurrenyValue } from '../Hooks/useCurrencyFormater';

function CartCard(props) {
    const CartCtx = useContext(CartContext);
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
        CartCtx.setCartPrice((prevValue) => parseFloat(prevValue) + parseFloat(props.price))
    }

    const decreaseCount = () => {
        if(count === 1) return
        setCount(count - 1)
        CartCtx.setCartPrice((prevValue) => parseFloat(prevValue) - parseFloat(props.price))
    }

    const currencyFormater = new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: 'EUR'
    })

  return (
    <div className='card'>
        <button type='button' className="card__delete" onClick={() => CartCtx.removeFromCart(props.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </button>
        <div className="card__container">
            <div className="card__img has-cover" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="card__holder">
                <h4 className="card__name">{props.name}</h4>
                <div className="card__holder-inner">
                    <span className="card__small">{props.genre}</span>
                    <span className="card__price"><span className="card__price-number">{count}</span> x {setCurrenyValue(props.price)}</span>
                </div>
                <div className="card__quantity">
                    <button type='button' className="card__button" onClick={decreaseCount}>-</button>
                    <span className="card__number js-card-number">{count}</span>
                    <button type='button' className="card__button" onClick={increaseCount}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard