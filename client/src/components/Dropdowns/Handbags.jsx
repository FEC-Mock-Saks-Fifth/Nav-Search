import React from 'react';
import ReactDOM from 'react-dom';

const Handbags = () => {
  const handbags = {
    col1: ["SHOP BY CATEGORY", "Shop All", "Backpacks", "Bucket Bags", "Clutches", "Crossbody Bags", "Luggage & Travel", "Shoulder Bags", "Top Handles & Satchels", "Totes", "Wallets & Cases"],
    col2: ["FEATURED DESIGNERS", "Bottega Veneta", "Chloé", "Fendi", "Gucci", "Saint Laurent", "Valentino", "Prada", "SHOP BY DESIGNER", "$1,000 & Under"],
    col3: ["NEW ARRIVALS", "BEST SELLERS", "MEN'S BAGS & LEATHER GOODS", "SALE", "BAGS OF THE MOMENT", "THE MINI BAG"]
  }
    return (
      <div className="SHANDBAGS">
        <div className="joshHSubContainer">
        <div className="joshHCol">
        {handbags.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshHMenuItem" key={index}><div className="joshHMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshHMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshHCol">
        {handbags.col2.map((elem, index) => {
        if (index !== 0 && index < (handbags.col2.length-2)) {
            return (<div className="joshHMenuItem" key={index}><div className="joshHMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshHMenuItem" key={index}><b>{elem}</b></div>)
        }
        else {
          return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshHCol">
        {handbags.col3.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
          } else {
            return (<div className="joshHMenuItem" key={index}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshHCol">
        <div className="joshHImageContainer">
          <a href="#">
        <img className="joshHIMage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_HB?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )
}

export default Handbags;



























