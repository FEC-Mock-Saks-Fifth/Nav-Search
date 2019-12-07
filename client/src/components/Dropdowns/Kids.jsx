import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 650px;
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

const Kids = ({font, borderColor}) => {
  const kids = {
    col1: [ 'BABY',  'Accessories',  'Baby Girl (0-24 Months)', 'Baby Boy (0-24 Months)', 'GIRLS', 'Accessories', 'Dresses', 'Girls (Sizes 2-6)', 'Girls (Sizes 7-16)', 'BOYS', 'Accessories', 'Boys (Sizes 2-6)', 'Boys (Sizes 7-20)', 'SHOES', 'Baby (0-24 Months)', 'Girls (2-16)', 'Boys (2-20)' ],
    col2: [ 'BABY GEAR & ESSENTIALS',  'Bathing',  'Blankets & Swaddles', 'Car Seats & Accessories', 'Diaper Bags', 'Playards & Activity Chairs', 'Strollers & Accessories', 'BABY GIFTS', 'TOYS & GIFTS', 'NEW ARRIVALS', 'BEST SELLERS', 'FROZEN 2 X SAKS', 'THE COLD WEATHER SHOP', 'Girls', 'Boys' ],
    col3: [ 'FEATURED DESIGNERS',  'Burberry',  'Canada Goose', 'Gucci', 'Moncler', 'Ralph Lauren', 'Sam.', 'SHOP BY DESIGNER', 'SPECIAL OCCASION SHOP', 'Girls', 'Boys', 'THE DESIGNER SHOP', 'Girls', 'Boys', 'Shoes', 'SALE' ]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SKIDS">
        <SubContainer>
        <Col>
        {kids.col1.map((elem, index) => {
          if (index !== 0 && index !== 4 && index !== 9 && index !== 13) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else if (index === 0) {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          } else {
            return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {kids.col2.map((elem, index) => {
        if (index > 6 && index < 13) {
            return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        } else if (index === 0){
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        else {
          return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        }
        })}
        </Col>
        <Col>
        {kids.col3.map((elem, index) => {
        if (index !== 0 && index !== 7 && index !== 8 && index !== 11 && (index !== kids.col3.length-1)) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else if (index === 0) {
            return (<MenuItem><b>{elem}</b></MenuItem>)
        } else {
          return (<MenuItem style={{'paddingTop': 25}}><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_JK?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )
}

export default Kids;

















