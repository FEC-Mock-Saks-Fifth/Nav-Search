import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
border-bottom: 0.2px solid ${props => props.borderColor};
font-size: 13px;
position: absolute;
height: 500px;
left: 0px;
top: 0px;
margin-top: 35px;
width: 100%;
background: rgba(255,255,255, 0.8);
display: flex;
justify-content: center;
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

const Designer = ({font, borderColor}) => {
  const designers = {
    col1: ["DESIGNERS BY CATEGORY", "Women's Apparel", "Beauty", "Shoes", "Handbags", "Jewelry & Accessories", "Men", "Kids", "Home"],
    col2: ["MOST WANTED", "Alice + Olivia", "Balenciaga", "Bottega Veneta", "Brunello Cucinelli", "Christian Louboutin", "Canada Goose", "Fendi", "Gucci", "La Mer", "Moncler", "Prada", "Saint Laurent", "Theory"],
    col3: ["NEW TO SAKS", "Amina Muaddi", "Baum Und Pferdgarten", "Ksubi", "Little Liffner", "Nita Suri", "Paris Texas", "Retrofête", "Rhude", "Rosantica", "Rotate Birger Christensen", "Tag Heuer", "The North Face", "Tory Burch"]
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SDESIGNER">
        <SubContainer>
        <Col>
        {designers.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {designers.col2.map((elem, index) => {
        if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
        } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {designers.col3.map((elem, index) => {
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
        <Image src="https://image.s5a.com/is/image/saks/091619_TOP_NAV_TOUT_WA?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )

}

export default Designer;




































