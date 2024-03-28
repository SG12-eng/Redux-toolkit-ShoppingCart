import React from 'react'
 
  import { useDispatch, useSelector } from 'react-redux'
  import {remove} from '../store/cartSlice'
  


const Cart = () => {

  const dispatch = useDispatch()

   const commodities = useSelector(state => state.cart)
   const handleRemove = (commodityID) => {
    dispatch(remove(commodityID))
   }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
            commodities.map(commodity => (
              <div className='cartCard'>
                 <img src={commodity.image} alt=""/>
                 <h5>{commodity.title}</h5>
                 <h5>{commodity.price}</h5>
                 <h5>{commodity.category}</h5>
                 {/* <h5>{commodity.rating}</h5> */}

                 <button className='btn' onClick={() => handleRemove(commodity.id)}>Remove</button>
                 </div>
            ))
        }
      </div>
    </div>
    

  )
}

export default Cart