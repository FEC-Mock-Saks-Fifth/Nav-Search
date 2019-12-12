import React from 'react';
import ReactDOM from 'react-dom';

const Sale = () => {
  const sale = {
    col1: ['SHOP BY CATEGORY', "Women's Apparel", 'Shoes', 'Handbags', 'Jewelry & Accessories', 'Beauty', 'Men', 'Kids', 'Home'],
    col2: [ 'SHOP BY PRICE',  'Under $50',  '$50 - $150', '$150 - $300', '$300 - $500', '$500 - $1000', '$1000 - $2000', 'Over $2000' ],
    col3: ['SHOP SAKS OFF FIFTH']
  }
    return (
      <div className="SSALE">
        <div className="joshSaleSubContainer">
        <div className="joshSaleCol">
        {sale.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshSaleMenuItem" key={index}><div className="joshSaleMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshSaleMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshSaleCol">
        {sale.col2.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshSaleMenuItem" key={index}><div className="joshSaleMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshSaleMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshSaleCol">
        {sale.col3.map((elem, index) => {
            return (<div className="joshSaleMenuItem" key={index}><b><div className="joshSaleMenuItemLink" href="#">{elem}</div></b></div>)
        })}
        </div>
        <div className="joshSaleCol">
        <div className="joshSaleImageContainer">
          <a href="#">
        <img className="joshSaleImage" src="https://image.s5a.com/is/image/saks/040519_TOP_NAV_TOUT_SALE?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )
}

export default Sale;

















