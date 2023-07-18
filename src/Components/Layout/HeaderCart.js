import style from './HeaderCart.module.css'

const HeaderCart=()=>{
  return (
    <button className={`${style.button} btn-primary`}>
    <i className="fa fa-cart-shopping mx-2" style={{color:'white'}}/>
    <span>Your Cart</span>
    <span className={style.badge}>3</span>
  </button>
  );
}
export default HeaderCart;