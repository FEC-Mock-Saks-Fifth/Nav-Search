import React from 'react';
import ReactDOM from 'react-dom';

const WomensApparel = () => {
  const womensApparel = {
    col1: ["SHOP ALL", "SHOP BY CATEGORY", "Shop All", "Holiday Dressing", "Coats & Jackets", "Dresses", "Formal & Evening", "Jeans", "Jumpsuits & Rompers", "Lingerie & Sleepwear", "Pants", "Skirts", "Suits", "Sweaters", "Swimsuits & Cover-ups", "Tops"],
    col2: ["FEATURED DESIGNERS", "Alice + Olivia", "Gucci", "Moncler", "Prada", "Rag & Bone", "Theory", "SHOP BY DESIGNER", "SPECIAL SIZES", "Plus & Extended Sizes"],
    col3: ["NEW ARRIVALS", "BEST SELLERS", "ONLY AT SAKS", "LIFESTYLE BOUTIQUES", "Premier Designers", "Contemporary", "Modern", "SALE"]
  }
    return (
      <div className="SWOMENSAPPAREL">
        <div className="joshWASubContainer">
        <div className="joshWACol">
        {womensApparel.col1.map((elem, index) => {
          if (index !== 0 && index !== 1) {
            return (<div className="joshWAMenuItem" key={index}><div className="joshWAMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 1) {
            return (<div className="joshWAMenuItem" style={{'paddingTop': 25}} key={index}><b>{elem}</b></div>)
          }
          else {
            return (<div className="joshWAMenuItem" key={index}><b><div className="joshWAMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshWACol">
        {womensApparel.col2.map((elem, index) => {
        if (index !== 0 && index !== 7 && index !== 8) {
            return (<div className="joshWAMenuItem" key={index}><div className="joshWAMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshWAMenuItem" key={index}><b>{elem}</b></div>)
        } else if (index === 8) {
          return (<div className="joshWAMenuItem" style={{'paddingTop': 25}} key={index}><b>{elem}</b></div>)
        }
        else {
          return (<div className="joshWAMenuItem" style={{'paddingTop': 25}} key={index}><b><div className="joshWAMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshWACol">
        {womensApparel.col3.map((elem, index) => {
        if (index >= 4 && index <= 6) {
            return (<div className="joshWAMenuItem" key={index}><div className="joshWAMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0) {
            return (<div className="joshWAMenuItem" key={index}><b><div className="joshWAMenuItemLink" href="#">{elem}</div></b></div>)
          } else {
            return (<div className="joshWAMenuItem" style={{'paddingTop': 25}} key={index}><b><div className="joshWAMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshWACol">
        <div className="joshWAImageContainer">
          <a href="#">
        <img className="joshWAImage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_WA?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default WomensApparel;










































