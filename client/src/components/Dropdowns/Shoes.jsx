import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 450px;
left: 0px;
top: 0px;
margin-top: 35px;
width: 100%;
background: rgba(255,255,255, 0.8);
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

const Shoes = ({font, borderColor}) => {
  const shoes = {
    col1: ["SHOP BY CATEGORY", "Shop All", "Block Heels", "Booties", "Boots", "Cold Weather & Rain Boots", "Evening", "Flats", "Pumps & Slingbacks", "Sandals", "Slides & Mules", "Sneakers"],
    col2: ["FEATURED DESIGNERS", "Balenciaga", "Christian Louboutin", "Fendi", "Gianvito Rossi", "Gucci", "Manolo Blahnik", "Saint Laurent", "Stuart Weitzman", "Valentino", "SHOP BY DESIGNER"],
    col3: ["NEW ARRIVALS", "BEST SELLERS", "MEN'S SHOES", "SALE", "IT LIST: Boot Camp", "Booties", "Cold Weather", "Combat", "Knee High", "Over-The-Knee"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SSHOES">
        <SubContainer>
        <Col>
        {shoes.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          }
          else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {shoes.col2.map((elem, index) => {
        if (index !== 0 && index !== (shoes.col2.length-1)) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        }
        else if (index === (shoes.col2.length-1)) {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {shoes.col3.map((elem, index) => {
        if (index <= 4 && index !== 0) {
            return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        } else if (index === 0) {
          return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        else {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_SH?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Shoes;





































































