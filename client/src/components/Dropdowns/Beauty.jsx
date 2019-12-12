import React from 'react';
import ReactDOM from 'react-dom';

const Beauty = () => {
  const beauty = {
    col1: ["SHOP ALL", "GIFTS WITH PURCHASE", "GIFTS & GIFT SETS", "FRAGRANCE", "MEN'S GROOMING & COLOGNE", "MAKEUP", "Eyes", "Face", "Lips"],
    col2: ["SKIN CARE", "Cleansers", "Eye Creams & Treatments", "Face & Sheet Masks", "Face Oils, Serums & Essences", "Moisturizers", "TOOLS, BRUSHES & MAKEUP BAGS", "NEW ARRIVALS", "BEST SELLERS", "ALLURE BEST OF BEAUTY"],
    col3: ["FEATURED DESIGNERS", "Bond No. 9 New York", "Christian Louboutin", "Creed", "Givenchy", "Kiehl's Since 1851", "La Mer", "Tom Ford", "SHOP BY DESIGNER", "THE APOTHECARY SHOP", "CLEAN BEAUTY"]
  }
    return (
      <div className="SBEAUTY">
        <div className="joshJSubContainer">
        <div className="joshBCol">
        {beauty.col1.map((elem, index) => {
          if (index !== 0 && index < beauty.col1.length-3) {
            return (<div className="joshBMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshBMenuItemLink" href="#">{elem}</div></b></div>)
          } else if (index === 0) {
            return (<div className="joshBMenuItem" key={index}><b><div className="joshBMenuItemLink" href="#">{elem}</div></b></div>)
          }
          else {
            return (<div className="joshBMenuItem" key={index}><div className="joshBMenuItemLink" href="#">{elem}</div></div>)
          }
        })}
        </div>
        <div className="joshBCol">
        {beauty.col2.map((elem, index) => {
        if (index > 0 && index < 6) {
            return (<div className="joshBMenuItem" key={index}><div className="joshBMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshBMenuItem" key={index}><b><div className="joshBMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
          return (<div className="joshBMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshBMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshBCol">
        {beauty.col3.map((elem, index) => {
        if (index !== 0 && index < 8) {
            return (<div className="joshBMenuItem" key={index}><div className="joshBMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0) {
            return (<div className="joshBMenuItem" key={index}><b>{elem}</b></div>)
          } else {
            return (<div className="joshBMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshBMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshBCol">
        <div className="joshBImageContainer">
          <a href="#">
        <img className="joshBImage" src="https://image.s5a.com/is/image/saks/111119_TOP_NAV_TOUT_BF?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default Beauty;












