import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Designer from './Dropdowns/Designer.jsx';
import TheEdit from './Dropdowns/TheEdit.jsx';
import WomensApparel from './Dropdowns/WomensApparel.jsx';
import Shoes from './Dropdowns/Shoes.jsx';
import Handbags from './Dropdowns/Handbags.jsx';
import Jewelry from './Dropdowns/Jewelry.jsx';
import Beauty from './Dropdowns/Beauty.jsx';
import Men from './Dropdowns/Men.jsx';
import Kids from './Dropdowns/Kids.jsx';
import Home from './Dropdowns/Home.jsx';
import Gifts from './Dropdowns/Gifts.jsx';
import Sale from './Dropdowns/Sale.jsx';
import { Transition } from 'react-spring/renderprops';

let giftIcon = 'https://www.iconsdb.com/icons/preview/red/gift-xxl.png';

const BorderContainer = styled.div`
font-family: ${props => props.font};
font-size: 14px;
position: absolute;
top: 155px;
left: 0px;
width: 100%;
height: 35px;
border-top: 0.2px solid ${props => props.borderColor};
border-bottom: 0.2px solid ${props => props.borderColor};
color: white;
text-align: center;
display: flex;
justify-content: center;
`;

const CatContainer = styled.div`
width: 1050px;
height: 35px;
text-align: center;
display: flex;
justify-content: space-between;
`;

const Cat = styled.div`
height: 33px;
display: flex;
color: black;
text-decoration: none;
justify-content: center;
align-items: center;
&:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}
`;

const DesignCat = styled(Cat)`
&:hover > .SDESIGNER {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const TheEditCat = styled(Cat)`
&:hover > .STHEEDIT {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const WomensApparelCat = styled(Cat)`
&:hover > .SWOMENSAPPAREL {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const ShoesCat = styled(Cat)`
&:hover > .SSHOES {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const HandbagsCat = styled(Cat)`
&:hover > .SHANDBAGS {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const JewelryCat = styled(Cat)`
&:hover > .SJEWELRY {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const BeautyCat = styled(Cat)`
&:hover > .SBEAUTY {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const MenCat = styled(Cat)`
&:hover > .SMEN {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const KidsCat = styled(Cat)`
&:hover > .SKIDS {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const HomeCat = styled(Cat)`
&:hover > .SHOME {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const GiftsCat = styled(Cat)`
&:hover > .SGIFTS {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const SaleCat = styled(Cat)`
&:hover > .SSALE {
  visibility: visible;
  opacity: 1;
  transform: translateY(0%);
  transition: all 0.25s ease .210s;
}
`;

const GiftIcon = styled.span`
margin-left: 2px;
width: 20px;
height: 15px;
background-image: url(${props => props.imageUrl});
background-size: contain;
background-repeat: no-repeat;
`

class CategoryBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <BorderContainer borderColor={this.props.borderColor} font={this.props.font}>
        <CatContainer>
          <DesignCat href="#" >
            DESIGNERS
            <Designer borderColor={this.props.borderColor}></Designer>
          </DesignCat>
          <TheEditCat href="#" >
            THE EDIT
          <TheEdit borderColor={this.props.borderColor}></TheEdit>
          </TheEditCat>
          <WomensApparelCat href="#" >
            WOMEN'S APPAREL
          <WomensApparel borderColor={this.props.borderColor}></WomensApparel>
          </WomensApparelCat>
          <ShoesCat href="#">
            SHOES
          <Shoes borderColor={this.props.borderColor}></Shoes>
          </ShoesCat>
          <HandbagsCat href="#">
            HANDBAGS
            <Handbags borderColor={this.props.borderColor}></Handbags>
          </HandbagsCat>
          <JewelryCat href="#">
              JEWELRY {'&'} ACCESSORIES
              <Jewelry borderColor={this.props.borderColor}></Jewelry>
          </JewelryCat>
          <BeautyCat href="#">
              BEAUTY
          <Beauty></Beauty>
          </BeautyCat>
          <MenCat href="#">
              MEN
            <Men borderColor={this.props.borderColor}></Men>
          </MenCat>
          <KidsCat href="#">
              KIDS
            <Kids borderColor={this.props.borderColor}></Kids>
          </KidsCat>
          <HomeCat href="#">
              HOME
            <Home borderColor={this.props.borderColor}></Home>
          </HomeCat>
          <GiftsCat href="#">
              <GiftIcon imageUrl={giftIcon}>
              </GiftIcon>
              <span style={{color: 'red'}}>
                GIFTS
              </span>
          <Gifts borderColor={this.props.borderColor}></Gifts>
          </GiftsCat>
          <SaleCat href="#">
              SALE
            <Sale borderColor={this.props.borderColor}></Sale>
          </SaleCat>
        </CatContainer>
      </BorderContainer>
        </div>
    )
  }
}

export default CategoryBar;