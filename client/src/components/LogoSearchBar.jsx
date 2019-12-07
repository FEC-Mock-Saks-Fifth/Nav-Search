import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
let saksLogo = 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Cd_operator.png%2Ch_600%2Cw_1200/v1567787597/saks.png';
let bagIcon = 'https://imageog.flaticon.com/icons/png/512/8/8109.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF';
let heartIcon = 'https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png';
let amFlag = 'https://cdn.webshopapp.com/shops/94414/files/54959460/the-united-states-flag-icon-free-download.jpg';

const MainContainer = styled.div`
font-family: ${props => props.font};
height: 120px;
width: 100%;
display: flex;
justify-content: center;
`;

const SubContainer = styled.div`
height: 120px;
width: 1050px;
display: flex;
flex-direction: row-reverse;
align-items: center;
`;

const LogoContainer = styled.div`
height: 100%;
width: 22%;
display: flex;
align-self: flex-start;
background-image: url(${props => props.imgUrl});
background-size: contain;
background-repeat: no-repeat;
`;
const SearchSignIn = styled.div`
height: 30%;
width: 78%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row-reverse;
`;

const ShopIcon = styled.a`
width: 45px;
height: 20px;
margin-bottom: 2px;
background-image: url(${props => props.imgUrl});
background-size: contain;
background-repeat: no-repeat;
transition: 0.3s;
&:hover {
  filter:opacity(60%);
  }
`;

const HeartIcon = styled.a`
width: 50px;
height: 50px;
background-image: url(${props => props.imgUrl});
background-size: contain;
background-repeat: no-repeat;
 &:hover {
  filter: invert(73%) sepia(48%) saturate(4880%) hue-rotate(296deg) brightness(101%) contrast(107%);
  }
`;

const ShipToContainer  = styled.div`
width: 120px;
height: 70%;
display: flex;
border-left: 0.2px solid ${props => props.borderColor};
align-items: center;
justify-content: space-around;
`;

const ShipTo = styled.a`
white-space: nowrap;
margin-left: 20px;
width: 42%;
height: 70%;
padding-bottom: 5px;
background-image: url(${props => props.imgUrl});
background-size: contain;
background-repeat: no-repeat;
color: black;
text-decoration: none;
transition: 0.3s;
 &:hover {
    filter:opacity(60%);
    border-bottom: 0.2px solid black;
  }
`;

const AmFlag = styled.a`
white-space: nowrap;
width: 20%;
height: 50%;
margin-top: 1px;
background-image: url(${props => props.imgUrl});
background-size: contain;
background-repeat: no-repeat;
color: black;
`;

const WelcomeContainer  = styled.div`
width: 140px;
height: 70%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Welcome = styled.a`
white-space: nowrap;
margin-right: 20px;
width: 90%;
height: 70%;
color: black;
padding-bottom: 5px;
text-decoration: none;
text-align: center;
transition: 0.3s;
 &:hover {
    filter:opacity(60%);
    border-bottom: 0.2px solid black;
  }
`;

class LogoSearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <MainContainer font={this.props.font}>
        <SubContainer>
          <SearchSignIn>
            <ShopIcon imgUrl={bagIcon} href="#">
            </ShopIcon>
            <HeartIcon imgUrl={heartIcon} href="#">
            </HeartIcon>
            <SearchBar borderColor={this.props.borderColor}></SearchBar>
            <ShipToContainer borderColor={this.props.borderColor}>
              <ShipTo href="#">
                Ship To
              </ShipTo>
              <AmFlag imgUrl={amFlag} href="#">
              </AmFlag>
            </ShipToContainer>
            <WelcomeContainer>
              <Welcome href="#">
                Welcome, Sign In
              </Welcome>
            </WelcomeContainer>
          </SearchSignIn>
        <LogoContainer imgUrl={saksLogo}>
        </LogoContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default LogoSearchBar;