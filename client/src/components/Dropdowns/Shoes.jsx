import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Shoes = () => {
  const shoes = {
    col1: ["SHOP BY CATEGORY", "Shop All", "Block Heels", "Booties", "Boots", "Cold Weather & Rain Boots", "Evening", "Flats", "Pumps & Slingbacks", "Sandals", "Slides & Mules", "Sneakers"],
    col2: ["FEATURED DESIGNERS", "Balenciaga", "Christian Louboutin", "Fendi", "Gianvito Rossi", "Gucci", "Manolo Blahnik", "Saint Laurent", "Stuart Weitzman", "Valentino", "SHOP BY DESIGNER"],
    col3: ["NEW ARRIVALS", "BEST SELLERS", "MEN'S SHOES", "SALE", "IT LIST: Boot Camp", "Booties", "Cold Weather", "Combat", "Knee High", "Over-The-Knee"]
  }
    return (
      <div className="SSHOES">
        <div className="joshSSubContainer">
        <div className="joshSCol">
        {shoes.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshSMenuItem" key={index}><div className="joshSMenuItemLink" href="#">{elem}</div></div>)
          }
          else {
            return (<div className="joshSMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshSCol">
        {shoes.col2.map((elem, index) => {
        if (index !== 0 && index !== (shoes.col2.length-1)) {
            return (<div className="joshSMenuItem" key={index}><div className="joshSMenuItemLink" href="#">{elem}</div></div>)
        }
        else if (index === (shoes.col2.length-1)) {
          return (<div className="joshSMenuItem" style={{'paddingTop': 25}} key={index}><b><div className="joshSMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
            return (<div className="joshSMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshSCol">
        {shoes.col3.map((elem, index) => {
        if (index <= 4 && index !== 0) {
            return (<div className="joshSMenuItem" style={{'paddingTop': 25}} key={index}><b><div className="joshSMenuItemLink" href="#">{elem}</div></b></div>)
        } else if (index === 0) {
          return (<div className="joshSMenuItem" key={index}><b><div className="joshSMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
            return (<div className="joshSMenuItem" key={index}><div className="joshSMenuItemLink" href="#">{elem}</div></div>)
          }
        })}
        </div>
        <div className="joshSCol">
        <div className="joshSImageContainer">
          <a href="#">
        <img className="joshSImage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_SH?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default Shoes;





































































