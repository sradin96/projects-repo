import React, { useContext, useRef } from 'react'
import emailjs from 'emailjs-com'
import CartContext from '../Context/CartContext';
import { setCurrenyValue } from '../Hooks/useCurrencyFormater';

function CartForm() {
    const form = useRef();
    const CartCtx = useContext(CartContext)

    const submitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3z2tfla', form.current, 'KODKackCeipZ7ENSq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
    }

  return (
    <>
    {
    CartCtx.formOpen ?
    <div className='cart-popup'>
        <button className="cart-popup__close" onClick={CartCtx.handleCartForm}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
        </button>
        <form ref={form} className="cart-popup__form" onSubmit={submitForm}>
            <h2 className="cart-popup__title">Finish Your Purchase</h2>
            <ul className="cart-popup__list">
                {
                    CartCtx.cart.map((c, i) => {
                        return <li key={i} className="cart-popup__item">
                            <input className='cart-popup__item-inner' disabled type="text" defaultValue={c.name} name="message" />
                            <input className='cart-popup__item-inner' disabled type="text" defaultValue={setCurrenyValue(c.price)} name="message" />
                        </li>
                    })
                }
            </ul>
            <div className="cart-popup__input-block">
                <input type="text" name='name' placeholder='Full Name' className="cart-popup__input" />
            </div>
            <div className="cart-popup__input-block">
                <input type="text" name='email' placeholder='Email' className="cart-popup__input" />
            </div>
            <div className="cart-popup__input-block">
                <select className='cart-popup__select' name="" id="">
                    <option value="Payment method" disabled>Payment method</option>
                    <option value="Payment method">Pay on delivery</option>
                    <option value="Payment method">Credit Card</option>
                    <option value="Payment method">PayPal</option>
                </select>
                <label htmlFor="checkbox" className="cart-popup__select-arrow"></label>
            </div>
            <div className="cart-popup__checkbox-block">
                <input type="checkbox" id="checkbox" className="cart-popup__checkbox-input" />
                <label htmlFor="checkbox" className="cart-popup__checkbox-text">I agree to GGs <a href="dangerouslySetInnerHTML" className="cart-popup__checkbox-link">Terms of Service</a></label>
            </div>
            <button className="cart-popup__submit">Submit</button>
        </form>
    </div>
    : ''
    }
    </>
  )
}

export default CartForm