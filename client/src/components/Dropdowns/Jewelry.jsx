import React from 'react';
import ReactDOM from 'react-dom';

const Jewelry = () => {
  const jewelry = {
    col1: ["ALL JEWELRY", "Bracelets", "Earrings", "Necklaces", "Rings", "FINE JEWELRY", "The Vault", "FASHION JEWELRY", "WATCHES", "Fashion", "Fine", "For Him"],
    col2: ["ACCESSORIES", "Belts", "Cold-Weather Accessories", "Hair Accessories", "Gloves", "Hats", "Scarves", "Sunglasses & Opticals", "Wallets & Cases", "MEN'S JEWELRY & ACCESSORIES", "NEW ARRIVALS", "BEST SELLERS"],
    col3: ["FEATURED DESIGNERS", "Anita Ko", "BVLGARI", "Cartier", "Ippolita", "Marco Bicego", "Roberto Coin", "SHOP BY DESIGNER", "THE FINE JEWELRY & WATCH GUIDE", "SALE"]
  }
    return (
      <div className="SJEWELRY">
        <div className="joshJSubContainer">
        <div className="joshJCol">
        {jewelry.col1.map((elem, index) => {
          if (index !== 0 && index !== 5 && index !== 7 && index !== 8) {
            return (<div className="joshJMenuItem" key={index}><div className="joshJMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 0) {
            return (<div className="joshJMenuItem" key={index}><b><div className="joshJMenuItemLink" href="#">{elem}</div></b></div>)
          }
          else {
            return (<div className="joshJMenuItem" key={index} style={{'paddingTop': 25}} ><b><div className="joshJMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshJCol">
        {jewelry.col2.map((elem, index) => {
        if (index !== 0 && index < 9) {
            return (<div className="joshJMenuItem" key={index}><div className="joshJMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshJMenuItem" key={index}><b><div className="joshJMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
          return (<div className="joshJMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshJMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshJCol">
        {jewelry.col3.map((elem, index) => {
        if (index !== 0 && index < 7) {
            return (<div className="joshJMenuItem" key={index}><div className="joshJMenuItemLink" href="#">{elem}</div></div>)
        } else if (index > 6) {
          return (<div className="joshJMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshJMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
            return (<div className="joshJMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshJCol">
        <div className="joshJImageContainer">
          <a href="#">
        <img className="joshJImage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_JA?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default Jewelry;

