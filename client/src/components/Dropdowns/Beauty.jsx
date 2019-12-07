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

const Beauty = ({font, borderColor}) => {
  const beauty = {
    col1: ["SHOP ALL", "GIFTS WITH PURCHASE", "GIFTS & GIFT SETS", "FRAGRANCE", "MEN'S GROOMING & COLOGNE", "MAKEUP", "Eyes", "Face", "Lips"],
    col2: ["SKIN CARE", "Cleansers", "Eye Creams & Treatments", "Face & Sheet Masks", "Face Oils, Serums & Essences", "Moisturizers", "TOOLS, BRUSHES & MAKEUP BAGS", "NEW ARRIVALS", "BEST SELLERS", "ALLURE BEST OF BEAUTY"],
    col3: ["FEATURED DESIGNERS", "Bond No. 9 New York", "Christian Louboutin", "Creed", "Givenchy", "Kiehl's Since 1851", "La Mer", "Tom Ford", "SHOP BY DESIGNER", "THE APOTHECARY SHOP", "CLEAN BEAUTY"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SBEAUTY">
        <SubContainer>
        <Col>
        {beauty.col1.map((elem, index) => {
          if (index !== 0 && index < beauty.col1.length-3) {
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
        {beauty.col2.map((elem, index) => {
        if (index > 0 && index < 6) {
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
        {beauty.col3.map((elem, index) => {
        if (index !== 0 && index < 8) {
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
        <Image src="https://image.s5a.com/is/image/saks/111119_TOP_NAV_TOUT_BF?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Beauty;












