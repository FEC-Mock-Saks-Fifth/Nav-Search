import React from 'react';
import ReactDOM from 'react-dom';

const TheEdit = () => {
  const theEdit = {
    col1: ["NEW ARRIVALS", "Women's Apparel", "Shoes", "Handbags", "Jewelry & Accessories", "Beauty", "Men", "Kids", "Home"],
    col2: ["FALL TRENDS", "Women: The It List", "Beauty: Want. Need. Love.", "Men: Need Now", "EDITORIALS", "Beautiful Gifting", "The Exquisite Jewelry", "The Evening Dress Event", "Gucci Fall Winter 2019 Collection", "Fall Designer Vol. 1", "Fall Designer Vol. 2", "Lookbooks: A Contemporary Series"],
    col3: ["BUYERS' PICKS", "Frozen 2 X Saks", "The Lodge", "Boot Camp", "The December Agenda", "Street Style", "Wedding Guest"]
  }
    return (
      <div className="STHEEDIT">
        <div className="joshTESC">
        <div className="joshTECol">
        {theEdit.col1.map((elem, index) => {
          if (index !== 0) {
            return (<div className="joshTEMenuItem" key={index}><div className="joshTEMenuItemLink" href="#">{elem}</div></div>)
          } else {
            return (<div className="joshTEMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshTECol">
        {theEdit.col2.map((elem, index) => {
        if (index !== 0 && index !== 4) {
            return (<div className="joshTEMenuItem" key={index}><div className="joshTEMenuItemLink" href="#">{elem}</div></div>)
        } else if (index === 0){
            return (<div className="joshTEMenuItem" key={index}><b>{elem}</b></div>)
        }
        else {
          return (<div className="joshTEMenuItem" style={{'paddingTop': 25}} key={index}><b>{elem}</b></div>)
        }
        })}
        </div>
        <div className="joshTECol">
        {theEdit.col3.map((elem, index) => {
        if (index !== 0) {
            return (<div className="joshTEMenuItem" key={index}><div className="joshTEMenuItemLink" href="#">{elem}</div></div>)
        } else {
            return (<div className="joshTEMenuItem" key={index}><b>{elem}</b></div>)
          }
        })}
        </div>
        <div className="joshTECol">
        <div className="joshTEImageContainer">
          <a href="#">
        <img src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_TRENDING?scl=1&qlt=90&fmt=jpg" className="joshTEImage">
        </img>
          </a>
        </div>
        </div>
        </div>
      </div>
    )

}

export default TheEdit;

















