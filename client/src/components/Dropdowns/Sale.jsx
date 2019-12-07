import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 350px;
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

const Sale = ({font, borderColor}) => {
  const sale = {
    col1: ['SHOP BY CATEGORY', "Women's Apparel", 'Shoes', 'Handbags', 'Jewelry & Accessories', 'Beauty', 'Men', 'Kids', 'Home'],
    col2: [ 'SHOP BY PRICE',  'Under $50',  '$50 - $150', '$150 - $300', '$300 - $500', '$500 - $1000', '$1000 - $2000', 'Over $2000' ],
    col3: ['SHOP SAKS OFF FIFTH']
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SSALE">
        <SubContainer>
        <Col>
        {sale.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {sale.col2.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {sale.col3.map((elem, index) => {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/040519_TOP_NAV_TOUT_SALE?scl=1&qlt=90&fmt=jpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )
}

export default Sale;

















