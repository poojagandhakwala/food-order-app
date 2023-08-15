import React, { useContext } from 'react'
import style from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context';

function Cart(props) {

  const cartCtx=useContext(CartContext);

  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems=cartCtx.items.length>0;

  const cartItems=(
  <ul 
  // className={style['cart-items']}
  >
    {cartCtx.items.map((item)=>{
      <>
      1
      <li>{item.name}</li>
      <li>{item.name}</li>
      </>
    })}
  </ul>);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button  className={style['button--alt']}  onClick={props.onClose}>Close</button>
       { hasItems && <button className={style.button}>Order</button>}
      </div>
      
    </Modal>
  )
}

export default Cart