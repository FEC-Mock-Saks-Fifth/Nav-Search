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

const Home = ({font, borderColor}) => {
  const home = {
    col1: [ 'HOLIDAY',  'Gourmet Food & Candy',  'Holiday Tabletop', 'Ornaments & Decor', 'GIFTING $150 & UNDER', 'BED & BATH', 'GOURMET FOODS & CANDY', 'HOME IMPROVEMENT & ORGANIZATION', 'HOME DÉCOR', 'Bowls, Vases & Trays', 'Candles & Diffusers', 'Decorative Pillows & Throws', 'Home Accents & Wall Art', 'Picture Frames' ],
    col2: [ 'KITCHEN & DINING',  'Blenders, Juicers & Mixers',  'Coffee & Tea', 'Cookware & Bakeware', 'Cutlery & Flatware', 'Dinnerware', 'Glassware & Barware', 'Kitchen Tools & Accessories', 'Serveware', 'Table Linens & Accessories', 'LUGGAGE & TRAVEL', 'Suitcases', 'Totes & Briefcases', 'Travel Accessories' ],
    col3: [ 'TECH ACCESSORIES & AUDIO',  'FEATURED DESIGNERS',  'Dyson', 'Georg Jensen', 'Jonathan Adler', 'MacKenzie Childs', 'Michael Aram', 'SHOP BY DESIGNER', 'BEST SELLERS', 'NEW ARRIVALS', 'SALE' ]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SHOME">
        <SubContainer>
        <Col>
        {home.col1.map((elem, index) => {
          if (index !== 0 && index < 4 || index > 8) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else if (index === 0) {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          } else {
            return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {home.col2.map((elem, index) => {
        if (index !== 0 && index !== 10) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index === 0){
            return (<MenuItem><b>{elem}</b></MenuItem>)
        }
        else {
          return (<MenuItem style={{'paddingTop': 25}}><b>{elem}</b></MenuItem>)
        }
        })}
        </Col>
        <Col>
        {home.col3.map((elem, index) => {
        if (index !== 0 && index !== 1 && index < 7) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index === 0) {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        } else if (index === 1) {
          return (<MenuItem style={{'paddingTop': 25}}><b>{elem}</b></MenuItem>)
        } else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_HG?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Home;

















