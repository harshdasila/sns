import React from 'react'

const OutOfStock = () =>{
  alert("The Accessories are not available yet. Arriving Soon!");
};
const CategoryItem = ({name,imgLink}) => {
  return (
    <div className='p-4 category-item'>
      <div>
        <img content='fit' src={imgLink}></img>
      </div>
      <button onClick={OutOfStock} className='bg-white h-[60px] w-full p-3 flex justify-center items-center'>
        <span>{name}</span>
      </button>
    </div>
  )
}

export default CategoryItem
