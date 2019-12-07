import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 500px;
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

const Jewelry = ({font, borderColor}) => {
  const jewelry = {
    col1: ["ALL JEWELRY", "Bracelets", "Earrings", "Necklaces", "Rings", "FINE JEWELRY", "The Vault", "FASHION JEWELRY", "WATCHES", "Fashion", "Fine", "For Him"],
    col2: ["ACCESSORIES", "Belts", "Cold-Weather Accessories", "Hair Accessories", "Gloves", "Hats", "Scarves", "Sunglasses & Opticals", "Wallets & Cases", "MEN'S JEWELRY & ACCESSORIES", "NEW ARRIVALS", "BEST SELLERS"],
    col3: ["FEATURED DESIGNERS", "Anita Ko", "BVLGARI", "Cartier", "Ippolita", "Marco Bicego", "Roberto Coin", "SHOP BY DESIGNER", "THE FINE JEWELRY & WATCH GUIDE", "SALE"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SJEWELRY">
        <SubContainer>
        <Col>
        {jewelry.col1.map((elem, index) => {
          if (index !== 0 && index !== 5 && index !== 7 && index !== 8) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else if (index === 0) {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
          else {
            return (<MenuItem style={{'paddingTop': 25}} ><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {jewelry.col2.map((elem, index) => {
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
        {jewelry.col3.map((elem, index) => {
        if (index !== 0 && index < 7) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index > 6) {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_JA?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Jewelry;

