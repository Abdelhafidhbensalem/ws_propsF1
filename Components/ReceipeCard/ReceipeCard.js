import React from 'react'
import './Receipe.css'

export const ReceipeCard = ({el,getName}) => {
  return (
    <div><div id="container">	
  {/* Start	Product details */}
  <div className="product-details">
    {/* 	Product Name */}
    <h1>{el.label}</h1>
    {/* 		<span class="hint new">New</span> */}
    {/* 		<span class="hint free-shipping">Free Shipping</span> */}
    {/* 		the Product rating */}
    <span className="hint-star star">
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star-half-o" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
    </span>
    {/* The most important information about the product */}
    <p className="information">{el.cuisineType}</p>
    {/* 		Control */}
    <div className="control">
      {/* Start Button buying */}
      <button  onClick={()=>getName(el.label)} className="btn">
        {/* 		the Price */}
        <span className="price">{Math.ceil(el.calories)}</span>
        {/* 		shopping cart icon*/}
        <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
        {/* 		Buy Now / ADD to Cart*/}
        <span className="buy">Buy Now</span>
      </button>
      {/* End Button buying */}
    </div>
  </div>
  {/* 	End	Product details   */}
  {/* 	Start product image & Information */}
  <div className="product-image">
    <img src={el.image} alt="Omar Dsoky" />
    {/* 	product Information*/}
    <div className="info">
      <h2>The Description</h2>
      <ul> {el.ingredientLines.map((el,i)=><li key={i}><strong>{el}</strong></li>)}
      </ul>
    </div>
  </div>
  {/*  End product image  */}
</div>

    
    
    </div>
  )
}
