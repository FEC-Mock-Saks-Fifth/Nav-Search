import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 400px;
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

const Handbags = ({font, borderColor}) => {
  const handbags = {
    col1: ["SHOP BY CATEGORY", "Shop All", "Backpacks", "Bucket Bags", "Clutches", "Crossbody Bags", "Luggage & Travel", "Shoulder Bags", "Top Handles & Satchels", "Totes", "Wallets & Cases"],
    col2: ["FEATURED DESIGNERS", "Bottega Veneta", "Chloé", "Fendi", "Gucci", "Saint Laurent", "Valentino", "Prada", "SHOP BY DESIGNER", "$1,000 & Under"],
    col3: ["NEW ARRIVALS", "BEST SELLERS", "MEN'S BAGS & LEATHER GOODS", "SALE", "BAGS OF THE MOMENT", "THE MINI BAG"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SHANDBAGS">
        <SubContainer>
        <Col>
        {handbags.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {handbags.col2.map((elem, index) => {
        if (index !== 0 && index < (handbags.col2.length-2)) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index === 0){
            return (<MenuItem><b>{elem}</b></MenuItem>)
        }
        else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        })}
        </Col>
        <Col>
        {handbags.col3.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          } else {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_HB?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )
}

export default Handbags;



























