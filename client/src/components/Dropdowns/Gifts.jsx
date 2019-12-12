import React from 'react';
import ReactDOM from 'react-dom';

const Gifts = () => {
  const gifts = {
    col1: [ 'SHOP BY CATEGORY',  'Shop All',  'Gifts For Her', 'Gifts For Him', 'Gifts For Kids', 'Gifts For The Home', 'Beauty & Wellness Gifts' ],
    col2: [ 'SHOP BY PRICE',  'Shop All',  'Gifts Under $50', 'Gifts Under $150', 'Gifts Under $500', 'Luxe Gifts' ],
    col3: ['GIFT CARDS', 'SAKS X FROZEN 2']
  }
    return (
      <div className="SGIFTS">
        <div className="joshGiftsSubContainer">
        <div className="joshGiftsCol">
        {gifts.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshGiftsMenuItem" key={index}><div className="joshGiftsMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshGiftsMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshGiftsCol">
        {gifts.col2.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshGiftsMenuItem" key={index}><div className="joshGiftsMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshGiftsMenuItem" key={index}><b><div className="joshGiftsMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshGiftsCol">
        {gifts.col3.map((elem, index) => {
            return (<div className="joshGiftsMenuItem" key={index}><b><div className="joshGiftsMenuItemLink" href="#">{elem}</div></b></div>)
        })}
        </div>
        <div className="joshGiftsCol">
        <div className="joshGiftsImageContainer">
          <a href="#">
        <img className="joshGiftsImage" src="https://image.s5a.com/is/image/saks/102119_TOP_NAV_TOUT_HDGG?scl=1&qlt=90&fmt=pjpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )
}

export default Gifts;

















