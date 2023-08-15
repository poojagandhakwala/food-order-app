import React, { useRef, useState } from 'react'
import style from './MealItemForm.module.css'

function MealItemForm(props) {

  const [amountIsValid,setAmountIsValid]=useState(true);
  const amountRef=useRef();

  const submitHandler=event=>{
    event.preventDefault();

    const enteredAmount=amountRef.current.value;
    const enteredAmontNumber= +enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmontNumber<1 || enteredAmontNumber>5)
    {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmontNumber);
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label className={style.label}>Amount</label>
      <input  type='number' min={1} max={5} defaultValue={1} step={1}
      ref={amountRef}  
      /><br/>
      <button className={style.add}>+ Add </button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm