import React from 'react';
import ReactDOM from 'react-dom';
import Designer from './Dropdowns/Designer.jsx';
import TheEdit from './Dropdowns/TheEdit.jsx';
import WomensApparel from './Dropdowns/WomensApparel.jsx';
import Shoes from './Dropdowns/Shoes.jsx';
import Handbags from './Dropdowns/Handbags.jsx';
import Jewelry from './Dropdowns/Jewelry.jsx';
import Beauty from './Dropdowns/Beauty.jsx';
import Men from './Dropdowns/Men.jsx';
import Kids from './Dropdowns/Kids.jsx';
import Home from './Dropdowns/Home.jsx';
import Gifts from './Dropdowns/Gifts.jsx';
import Sale from './Dropdowns/Sale.jsx';
import { Transition } from 'react-spring/renderprops';

class CategoryBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <div className="joshBorderContainerCats">
        <div className="joshCatContainer">
          <div href="#" className="joshDesignCat">
            DESIGNERS
            <Designer></Designer>
          </div>
          <div href="#" className="joshTheEditCat">
            THE EDIT
          <TheEdit></TheEdit>
          </div>
          <div href="#" className="joshWomensApparelCat">
            WOMEN'S APPAREL
          <WomensApparel></WomensApparel>
          </div>
          <div href="#" className="joshShoesCat">
            SHOES
          <Shoes></Shoes>
          </div>
          <div className="joshHandbagsCat" href="#">
            HANDBAGS
            <Handbags></Handbags>
          </div>
          <div className="joshJewelryCat" href="#">
              JEWELRY {'&'} ACCESSORIES
              <Jewelry></Jewelry>
          </div>
          <div className="joshBeautyCat" href="#">
              BEAUTY
          <Beauty></Beauty>
          </div>
          <div className="joshMenCat" href="#">
              MEN
            <Men></Men>
          </div>
          <div className="joshKidsCat" href="#">
              KIDS
            <Kids></Kids>
          </div>
          <div className="joshHomeCat" href="#">
              HOME
            <Home></Home>
          </div>
          <div className="joshGiftsCat" href="#">
              <span className="joshGiftIcon">
              </span>
              <span style={{color: 'red'}}>
                GIFTS
              </span>
          <Gifts></Gifts>
          </div>
          <div className="joshSaleCat" href="#">
              SALE
            <Sale></Sale>
          </div>
        </div>
      </div>
        </div>
    )
  }
}

export default CategoryBar;