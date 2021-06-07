import { Star } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../stateprovider';
import './CheckoutProduct.css'

function CheckoutProduct({id,title,rating,price,image}) {
    //to pull /change info
    const [{cart},dispatch]= useStateValue();

    const removefromcart=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id
        })
    }


    return (
        <div className='checkoutproduct'>
            <img className='checkproductImage' src={image}/>

            <div className= 'checkproductInfo'>
                <p className='checkproductTitle'>
                    {title}
                </p>
                <p className='checkproductPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkproductRating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                    <p><Star/></p>)
                    )}
                </div>
                       
                <button  onClick={removefromcart}>Remove from Cart</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;