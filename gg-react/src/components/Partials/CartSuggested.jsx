import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { setCurrenyValue } from '../Hooks/useCurrencyFormater'

function CartSuggested(props) {
    const CartCtx = useContext(CartContext)
  return (
    <div className='card'>
        <button type='button' className="card__delete" onClick={(e) => CartCtx.addToCart(e, props.game)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>        </button>
        <div className="card__container">
            <div className="card__img has-cover" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="card__holder">
                <h4 className="card__name">{props.name}</h4>
                <div className="card__holder-inner">
                    <span className="card__small">{props.genre}</span>
                    <span className="card__price">{setCurrenyValue(props.price)}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartSuggested