import React from 'react';
import ReactDOM from 'react-dom';

const Kids = () => {
  const kids = {
    col1: [ 'BABY',  'Accessories',  'Baby Girl (0-24 Months)', 'Baby Boy (0-24 Months)', 'GIRLS', 'Accessories', 'Dresses', 'Girls (Sizes 2-6)', 'Girls (Sizes 7-16)', 'BOYS', 'Accessories', 'Boys (Sizes 2-6)', 'Boys (Sizes 7-20)', 'SHOES', 'Baby (0-24 Months)', 'Girls (2-16)', 'Boys (2-20)' ],
    col2: [ 'BABY GEAR & ESSENTIALS',  'Bathing',  'Blankets & Swaddles', 'Car Seats & Accessories', 'Diaper Bags', 'Playards & Activity Chairs', 'Strollers & Accessories', 'BABY GIFTS', 'TOYS & GIFTS', 'NEW ARRIVALS', 'BEST SELLERS', 'FROZEN 2 X SAKS', 'THE COLD WEATHER SHOP', 'Girls', 'Boys' ],
    col3: [ 'FEATURED DESIGNERS',  'Burberry',  'Canada Goose', 'Gucci', 'Moncler', 'Ralph Lauren', 'Sam.', 'SHOP BY DESIGNER', 'SPECIAL OCCASION SHOP', 'Girls', 'Boys', 'THE DESIGNER SHOP', 'Girls', 'Boys', 'Shoes', 'SALE' ]
  }
    return (
      <div className="SKIDS">
        <div className="joshKSubContainer">
        <div className="joshKCol">
        {kids.col1.map((elem, index) => {
          if (index !== 0 && index !== 4 && index !== 9 && index !== 13) {
            return (<div className="joshKMenuItem" key={index}><div className="joshKMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 0) {
            return (<div className="joshKMenuItem" key={index}><b><div className="joshKMenuItemLink" href="#">{elem}</div></b></div>)
          } else {
            return (<div className="joshKMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshKMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshKCol">
        {kids.col2.map((elem, index) => {
        if (index > 6 && index < 13) {
            return (<div className="joshKMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshKMenuItemLink" href="#">{elem}</div></b></div>)
        } else if (index === 0){
            return (<div className="joshKMenuItem" key={index}><b><div className="joshKMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
          return (<div className="joshKMenuItem" key={index}><div className="joshKMenuItemLink" href="#">{elem}</div></div>)
        }
        })}
        </div>
        <div className="joshKCol">
        {kids.col3.map((elem, index) => {
        if (index !== 0 && index !== 7 && index !== 8 && index !== 11 && (index !== kids.col3.length-1)) {
            return (<div className="joshKMenuItem" key={index}><div className="joshKMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0) {
            return (<div className="joshKMenuItem" key={index}><b>{elem}</b></div>)
        } else {
          return (<div className="joshKMenuItem" key={index} style={{'paddingTop': 25}}><b><div href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshKCol">
        <div className="joshKImageContainer">
          <a href="#">
        <img className="joshKImage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_JK?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )
}

export default Kids;

















