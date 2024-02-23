import React, {  useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    

    const setCurrencyHandler = (e) => {
        let currency = "";
        if (e.target.value === "dollar") {
            currency = "$"
        }
        else if(e.target.value === "pound"){
            currency = "£"
        }
        else if(e.target.value === "euro"){
            currency = "€"
        }
        else if(e.target.value === "ruppee"){
            currency = "₹"
        }
        dispatch({
          type: "CHG_CURRENCY",
          payload: currency,
        })

      };
     
        
    

   return (
    <>
        <label for="currency" >Currency ({currency})</label>
        <select className = 'currency-box-selector'name="currency" onChange={setCurrencyHandler}>
        <option value="pound">£ Pound</option>
        <option value="dollar" >$ Dollar</option>
        <option value="euro">€ Euro</option>
        <option value="ruppee">₹ Ruppee</option>
        </select>
    </>
        
   )
}
export default Currency;