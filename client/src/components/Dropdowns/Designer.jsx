import React from 'react';
import ReactDOM from 'react-dom';

const Designer = ({font, borderColor}) => {
  const designers = {
    col1: ["DESIGNERS BY CATEGORY", "Women's Apparel", "Beauty", "Shoes", "Handbags", "Jewelry & Accessories", "Men", "Kids", "Home"],
    col2: ["MOST WANTED", "Alice + Olivia", "Balenciaga", "Bottega Veneta", "Brunello Cucinelli", "Christian Louboutin", "Canada Goose", "Fendi", "Gucci", "La Mer", "Moncler", "Prada", "Saint Laurent", "Theory"],
    col3: ["NEW TO SAKS", "Amina Muaddi", "Baum Und Pferdgarten", "Ksubi", "Little Liffner", "Nita Suri", "Paris Texas", "Retrofête", "Rhude", "Rosantica", "Rotate Birger Christensen", "Tag Heuer", "The North Face", "Tory Burch"]
  }
    return (
      <div font={font} borderColor={borderColor} className="SDESIGNER">
        <div className="joshDSC">
        <div className="joshDCol">
        {designers.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshDMenuItem" key={index}><div className="joshDMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshDMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshDCol">
        {designers.col2.map((elem, index) => {
        if (index !== 0) {
            return (<div className="joshDMenuItem" key={index}><div className="joshDMenuItemLink" href="#">{elem}</div></div>)
        } else {
            return (<div className="joshDMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshDCol">
        {designers.col3.map((elem, index) => {
        if (index !== 0) {
            return (<div className="joshDMenuItem" key={index}><div className="joshDMenuItemLink" href="#">{elem}</div></div>)
        } else {
            return (<div className="joshDMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshDCol">
        <div className="joshDImageContainer">
          <a href="#">
        <img className="joshDImage"src="https://image.s5a.com/is/image/saks/091619_TOP_NAV_TOUT_WA?scl=1&qlt=90&fmt=jpg">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default Designer;




































