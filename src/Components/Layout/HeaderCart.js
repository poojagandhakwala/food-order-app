import { useContext } from 'react';
import style from './HeaderCart.module.css'
import CartContext from '../../store/cart-context';

const HeaderCart=(props)=>{
  
  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0);  

  return (
    <button className={`${style.button} btn-primary`} onClick={props.onClick}>
    <i className="fa fa-cart-shopping mx-2" style={{color:'white'}}/>
    <span>Your Cart</span>
    <span className={style.badge}>{numberOfCartItems}</span>
  </button>
  );
}
export default HeaderCart;