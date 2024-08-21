import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import style from './MealItem.module.css';

const MealItem=props=>{
  
  const cartCtx=useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={style.meal} key={props.id}>
      <div>
        <p className={style.mealsname}>{props.name}</p>
        <p className={style.description}>{props.description}</p>
        <p className={style.price}>${props.price}</p>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
  </li>
  );
}

export default MealItem;