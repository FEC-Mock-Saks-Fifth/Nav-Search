import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
font-family: ${props => props.font};
font-size: 13px;
position: absolute;
height: 300px;
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

const Gifts = ({font, borderColor}) => {
  const gifts = {
    col1: [ 'SHOP BY CATEGORY',  'Shop All',  'Gifts For Her', 'Gifts For Him', 'Gifts For Kids', 'Gifts For The Home', 'Beauty & Wellness Gifts' ],
    col2: [ 'SHOP BY PRICE',  'Shop All',  'Gifts Under $50', 'Gifts Under $150', 'Gifts Under $500', 'Luxe Gifts' ],
    col3: ['GIFT CARDS', 'SAKS X FROZEN 2']
  }
    return (
      <MenuContainer font={font} borderColor={borderColor} className="SGIFTS">
        <SubContainer>
        <Col>
        {gifts.col1.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b>{elem}</b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {gifts.col2.map((elem, index) => {
          if (index !== 0) {
            return (<MenuItem><MenuItemLink href="#">{elem}</MenuItemLink></MenuItem>)
          } else {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
          }
        })}
        </Col>
        <Col>
        {gifts.col3.map((elem, index) => {
            return (<MenuItem><b><MenuItemLink href="#">{elem}</MenuItemLink></b></MenuItem>)
        })}
        </Col>
        <Col>
        <ImageContainer>
          <a href="#">
        <Image src="https://image.s5a.com/is/image/saks/102119_TOP_NAV_TOUT_HDGG?scl=1&qlt=90&fmt=pjpg">
        </Image>
          </a>
        </ImageContainer>
        </Col>
        </SubContainer>
      </MenuContainer>
    )
}

export default Gifts;

















