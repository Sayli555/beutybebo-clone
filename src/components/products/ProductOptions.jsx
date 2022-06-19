import React from 'react';
import "./productoption.css"

const ProductOptions = ({title, img, path}) => {
  return (
    <div className='productoption'>
      <div>
        <img className='primag'
        src={img}
        />
        <br/>
      
      </div>
      <div className='prtitle' >{title}</div>
    </div>
  )
}

export default ProductOptions
