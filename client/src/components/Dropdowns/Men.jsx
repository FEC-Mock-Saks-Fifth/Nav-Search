import React from 'react';
import ReactDOM from 'react-dom';


const Men = () => {
  const men = {
    col1: [ 'APPAREL',  'Shop All',  'Activewear','Casual Button-Down Shirts','Coats & Jackets','Dress Shirts','Jeans','Loungewear & Pajamas','Pants','Shorts','Sportscoats & Blazers','Suits','Sweaters','Sweatshirts & Hoodies','Swimwear','T-Shirts & Polos','Underwear & Socks' ],
    col2: [ 'SHOES',  'Shop All',  'Boots', 'Cold Weather', 'Dress Shoes', 'Formal', 'Loafers & Drivers', 'Slides & Sandals', 'Sneakers', 'HOLIDAY DRESSING', 'NEW ARRIVALS', 'BEST SELLERS', 'ONLY AT SAKS' ],
    col3: [ 'ACCESSORIES',  'Shop All',  'Bags', 'Belts', 'Cuff Links & Tie Bars', 'Jewelry', 'Hats, Scarves & Gloves', 'Sunglasses & Opticals', 'Ties & Formal Accessories', 'Wallets & Card Cases', 'Watches', 'LUGGAGE & TRAVEL', 'GROOMING & COLOGNE' ],
    col4: [ 'FEATURED DESIGNERS',  'Balenciaga',  'Brunello Cucinelli', 'Canada Goose', 'Givenchy', 'Moncler', 'Off-White', 'SHOP BY DESIGNER', 'GIFTS FOR HIM', 'NEED NOW', 'SALE' ]
  }
    return (
      <div className="SMEN">
        <div className="joshMSubContainer">
        <div className="joshMCol">
        {men.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshMMenuItem" key={index}><div className="joshMMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshMMenuItem" key={index}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshMCol">
        {men.col2.map((elem, index) => {
        if (index !== 0 && index < 9) {
            return (<div className="joshMMenuItem" key={index}><div className="joshMMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshMMenuItem" key={index}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
        }
        else {
          return (<div className="joshMMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
        }
        })}
        </div>
        <div className="joshMCol">
        {men.col3.map((elem, index) => {
          if (index !== 0 && index < 11) {
            return (<div className="joshMMenuItem" key={index}><div className="joshMMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 0){
            return (<div className="joshMMenuItem" key={index}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
          }
          else {
          return (<div className="joshMMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        <div className="joshMCol">
        {men.col4.map((elem, index) => {
          if (index !== 0 && index < 7) {
            return (<div className="joshMMenuItem" key={index}><div className="joshMMenuItemLink" href="#">{elem}</div></div>)
          } else if (index === 0){
            return (<div className="joshMMenuItem" key={index}><b>{elem}</b></div>)
          }
          else {
          return (<div className="joshMMenuItem" key={index} style={{'paddingTop': 25}}><b><div className="joshMMenuItemLink" href="#">{elem}</div></b></div>)
          }
        })}
        </div>
        </div>
      </div>
    )

}

export default Men;

















