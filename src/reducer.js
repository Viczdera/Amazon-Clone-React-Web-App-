export const initialState = {
  user: [],
  cart: [],
};
//selector
var amount=0;
export const getCartTotal = (cart) =>
  
  cart?.reduce( (amount,item) => item.price + amount, 0);

//writing the reducer
const reducer = (state, action) => {
  //takes a switch based on action.type
  {/*console.log(action);*/}
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

     case "REMOVE_FROM_CART":
       //using findIndex to get the index of the id
       const index= state.cart.findIndex(
         (cartItem)=>cartItem.id ===action.id
       ); let newCart= [...state.cart]

       if(index>=0){
          newCart.splice(index,1);
       }else{
         console.warn('Can not remove product (id:${action.id}).Its not in the cart)')
         }

       return{ 
         ...state,
         cart:newCart
       }
      
    case "SetUser":
      return{
        ...state,
        user:action.user
      }

    default:
      return state;
  }
};
export default reducer;
