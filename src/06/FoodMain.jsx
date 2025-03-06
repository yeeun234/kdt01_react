import React from 'react'
import FoodCard from './FoodCard'
export default function FoodMain() {
  return (
    <div className='w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
      <FoodCard></FoodCard>
    </div>
  )
}
