import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  const home = {
    col1: [ 'HOLIDAY',  'Gourmet Food & Candy',  'Holiday Tabletop', 'Ornaments & Decor', 'GIFTING $150 & UNDER', 'BED & BATH', 'GOURMET FOODS & CANDY', 'HOME IMPROVEMENT & ORGANIZATION', 'HOME DÉCOR', 'Bowls, Vases & Trays', 'Candles & Diffusers', 'Decorative Pillows & Throws', 'Home Accents & Wall Art', 'Picture Frames' ],
    col2: [ 'KITCHEN & DINING',  'Blenders, Juicers & Mixers',  'Coffee & Tea', 'Cookware & Bakeware', 'Cutlery & Flatware', 'Dinnerware', 'Glassware & Barware', 'Kitchen Tools & Accessories', 'Serveware', 'Table Linens & Accessories', 'LUGGAGE & TRAVEL', 'Suitcases', 'Totes & Briefcases', 'Travel Accessories' ],
    col3: [ 'TECH ACCESSORIES & AUDIO',  'FEATURED DESIGNERS',  'Dyson', 'Georg Jensen', 'Jonathan Adler', 'MacKenzie Childs', 'Michael Aram', 'SHOP BY DESIGNER', 'BEST SELLERS', 'NEW ARRIVALS', 'SALE' ]
  }
    return (
      <div className="SHOME">
        <div className="joshHSubContainer">
        <div className="joshHCol">
        {home.col1.map((elem, index) => {
          if (index !== 0 && index < 4 || index > 8) {
            return (<div className="joshHMenuItem" key={index}><div className="joshHMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 0) {
            return (<div className="joshHMenuItem" key={index}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
          } else {
            return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshHCol">
        {home.col2.map((elem, index) => {
        if (index !== 0 && index !== 10) {
            return (<div className="joshHMenuItem" key={index}><div className="joshHMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshHMenuItem" key={index}><b>{elem}</b></div>)
        }
        else {
          return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b>{elem}</b></div>)
        }
        })}
        </div>
        <div className="joshHCol">
        {home.col3.map((elem, index) => {
        if (index !== 0 && index !== 1 && index < 7) {
            return (<div className="joshHMenuItem" key={index}><div className="joshHMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0) {
            return (<div className="joshHMenuItem" key={index}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
        } else if (index === 1) {
          return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b>{elem}</b></div>)
        } else {
          return (<div className="joshHMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshHMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshHCol">
        <div className="joshHImageContainer">
          <a href="#">
        <img className="joshHomeImage" src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_HG?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default Home;

















