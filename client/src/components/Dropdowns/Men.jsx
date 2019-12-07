import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 600px;
left: 0px;
top: 0px;
margin-top: 35px;
width: 100%;
background: rgba(255,255,255, 0.3);
display: flex;
justify-content: center;
border-bottom: 0.2px solid ${props => props.borderColor};
visibility: hidden;
transition: all 0.2s;
opacity: 0;
transform: translateY(-1.5%);
`

const SubContainer = styled.div`
position: absolute;
height: 100%;
width: 1050px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Col = styled.div`
height: 100%;
witdh: 300px;
text-align: left;
`
const MenuItem = styled.div`
width: 240px;
padding-bottom: 5px;
padding-top: 5px;
`

const MenuItemLink = styled.a`
text-decoration: none;
color: black
&:hover {
  text-decoration: underline;
  }
`
const ImageContainer = styled.div`
padding-top: 10px;
width: 240px;
height: 100%;
display: flex;
`

const Image = styled.img`
width: 100%;
height: 270px;
background-size: contain;
background-repeat: no-repeat;
`

const Men = ({font, borderColor}) => {
  const men = {
    col1: [ 'APPAREL',  'Shop All',  'Activewear','Casual Button-Down Shirts','Coats & Jackets','Dress Shirts','Jeans','Loungewear & Pajamas','Pants','Shorts','Sportscoats & Blazers','Suits','Sweaters','Sweatshirts & Hoodies','Swimwear','T-Shirts & Polos','Underwear & Socks' ],
    col2: [ 'SHOES',  'Shop All',  'Boots', 'Cold Weather', 'Dress Shoes', 'Formal', 'Loafers & Drivers', 'Slides & Sandals', 'Sneakers', 'HOLIDAY DRESSING', 'NEW ARRIVALS', 'BEST SELLERS', 'ONLY AT SAKS' ],
    col3: [ 'ACCESSORIES',  'Shop All',  'Bags', 'Belts', 'Cuff Links & Tie Bars', 'Jewelry', 'Hats, Scarves & Gloves', 'Sunglasses & Opticals', 'Ties & Formal Accessories', 'Wallets & Card Cases', 'Watches', 'LUGGAGE & TRAVEL', 'GROOMING & COLOGNE' ],
    col4: [ 'FEATURED DESIGNERS',  'Balenciaga',  'Brunello Cucinelli', 'Canada Goose', 'Givenchy', 'Moncler', 'Off-White', 'SHOP BY DESIGNER', 'GIFTS FOR HIM', 'NEED NOW', 'SALE' ]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SMEN">
        <SubContainer>
        <Col>
        {men.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {men.col2.map((elem, index) => {
        if (index !== 0 && index < 9) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index === 0){
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        })}
        </Col>
        <Col>
        {men.col3.map((elem, index) => {
          if (index !== 0 && index < 11) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else if (index === 0){
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
          else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {men.col4.map((elem, index) => {
          if (index !== 0 && index < 7) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else if (index === 0){
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
          else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Men;

















