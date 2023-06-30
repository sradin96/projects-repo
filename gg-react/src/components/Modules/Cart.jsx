import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';
import GamesContext from '../Context/GamesContext';
import CartCard from '../Partials/CartCard';
import CartSuggested from '../Partials/CartSuggested';

function Cart() {
	const CartCtx = useContext(CartContext);
	const GamesCtx = useContext(GamesContext)
	const suggestedGames = GamesCtx.suggested
	const cart = CartCtx.cart

	const currencyFormater = new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: 'EUR'
    })

  return (
	<div className={CartCtx.open ? 'cart card--active' : 'cart'}>
		<button onClick={CartCtx.handleCart} className="cart__exit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor"><path d="M5.425 3.908a.553.553 0 0 1 .408-.16c.166 0 .302.053.409.16l2.683 2.684c.058.058.1.121.124.19a.65.65 0 0 1-.007.444.535.535 0 0 1-.117.182l-2.683 2.684a.553.553 0 0 1-.409.16.553.553 0 0 1-.408-.16.553.553 0 0 1-.16-.409c0-.165.053-.301.16-.408L7.7 7 5.425 4.725a.553.553 0 0 1-.16-.408c0-.166.053-.302.16-.409Z"/></svg></button>
		{
			cart.length ?
			<>
				<h2 className="cart__title">Cart</h2>
				<span className="cart__sum">Items in Cart: <span className="cart__sum-number">{cart.length}</span></span>
			</>
			: <h2 className="cart__title">Empty Cart</h2>
		}
		<div className="cart__holder">
		{
			cart.length ?
			cart.map((item, i) => {
				return <CartCard key={i}
				name={item.name}
				price={item.price}
				genre={item.genre}
				image={item.image}
				id={item.id}
				/>
			})
			: <div className="cart__empty">
				<p className="cart__empty-text">Suggested Games:</p>
				<div className="cart__empty-suggested">
					{
						suggestedGames?.map((item, i) => {
							return <CartSuggested key={i}
							game={item}
							name={item.name}
							price={item.price}
							genre={item.genre}
							image={item.image}
							id={item.id}
							/>
						})
					}
				</div>
			</div>
		}
		</div>
		{
		cart.length ?
		<>
		<h4 className="cart__subtitle">Total: <span className="cart__total">{currencyFormater.format(CartCtx.cartPrice)}</span></h4>
		<button type='button' className="cart__btn" onClick={CartCtx.handleCartForm}>Continue</button>
		</>
		: ''
		}
	</div>
  )
}

export default Cart