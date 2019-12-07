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

const TheEdit = ({font, borderColor}) => {
  const theEdit = {
    col1: ["NEW ARRIVALS", "Women's Apparel", "Shoes", "Handbags", "Jewelry & Accessories", "Beauty", "Men", "Kids", "Home"],
    col2: ["FALL TRENDS", "Women: The It List", "Beauty: Want. Need. Love.", "Men: Need Now", "EDITORIALS", "Beautiful Gifting", "The Exquisite Jewelry", "The Evening Dress Event", "Gucci Fall Winter 2019 Collection", "Fall Designer Vol. 1", "Fall Designer Vol. 2", "Lookbooks: A Contemporary Series"],
    col3: ["BUYERS' PICKS", "Frozen 2 X Saks", "The Lodge", "Boot Camp", "The December Agenda", "Street Style", "Wedding Guest"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="STHEEDIT">
        <SubContainer>
        <Col>
        {theEdit.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {theEdit.col2.map((elem, index) => {
        if (index !== 0 && index !== 4) {
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
        {theEdit.col3.map((elem, index) => {
        if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/120219_TOP_NAV_TOUT_TRENDING?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default TheEdit;

















