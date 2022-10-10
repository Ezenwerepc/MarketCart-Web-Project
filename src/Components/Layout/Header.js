import React,{Fragment} from 'react';
import mealsImage from '../../assets/Meals.jpeg';
import HeaderCartButton from './HeaderCartButton'
import '../Layout/Header.css';
const Header = (props) =>{

 return (
 <Fragment>
 <header className="header">
  <h1>Petrus Meals</h1>
  <HeaderCartButton onClick={props.onShowCart}/>
 </header>
 <div className="main-image">
  <img src={mealsImage} alt="a table full of meals"/>
 </div>
 </Fragment>
 )
};
export default Header;