import React, { useState } from 'react'
import './Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product({ image }) {
    const [isShown, setIsShown] = useState(false)
      

  return (
    <div onMouseOver={() => setIsShown(true)} onMouseOut={() =>setIsShown(false)} className="Product">
        <img width='250'  src={image} alt="" />
        
          <div className="product-details">
          <div className="muiIcon"><AddShoppingCartIcon /></div>
              <div className="muiIcon"><SearchIcon /></div>
              <div className="muiIcon"><FavoriteBorderIcon /></div>
          </div>
        
    </div>
  )
}

export default Product