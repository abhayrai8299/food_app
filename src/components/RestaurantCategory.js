import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
    console.log("prrr",props)
  return (
    <div>
    <div className='w-6/12 mx-auto my-4 bg-gray-50 flex justify-between shadow-lg p-4'> 
    <span className='font-bold text-lg'>{props?.data.title}({props?.data?.itemCards?.length})</span>
      <span>⬇️</span>
    </div>  
      <ItemList />
    </div>
  )
}

export default RestaurantCategory
