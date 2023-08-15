import {Fragment} from 'react'
import style from './Header.module.css'
import home from '../../assets/home.png'
import HeaderCart from './HeaderCart'

const Header=props=>{
  return <Fragment>
    <header className={style.header} >
      <h1 className=''>Meals</h1>
      <HeaderCart onClick={props.onShowCart}/>
    </header>
    <div className={style['main-image']}>
      <img src={home} alt="A table full of delicious food!"/>
    </div>
    </Fragment>
}
export default Header;