import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-spring/renderprops';

class PromoBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      promos: [
        `BLACK FRIDAY EXCLUSIVE | Earn a $75 Gift Card with Only a $150 purchase | Use Code THANK19SF | DETAILS`,
        `THANKSGIVING SALE | Up to 60% OFF | SHOP NOW`,
        `Get Up to $150 OFF Women’s Denim | Use Code: DENIM19SF | DETAILS`,
        `Up to 50% OFF DESIGNER selections | SHOP NOW`,
        `Enter Your Email for a Chance to Win a $1,500 GIFT CARD | SIGN UP`,
        `FREE SHIPPING | Every Day, Every Order | Use Code: FREESHIPDETAILS`,
        `SAKS BY TEXT Sign up for sales, trends & more on your phone. SIGN UP`,
        `Saks at Your Service | In-store services at a location near you LEARN MORE`
      ],
      currentPromo: 0,
      isRightScroll: true
    }
    this.handleRightPromoScroll = this.handleRightPromoScroll.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleRightPromoScroll() {
    this.setState({
      isRightScroll: true
    });

    if (this.state.currentPromo < this.state.promos.length - 1) {
      this.setState({
        currentPromo: this.state.currentPromo + 1
      })
    } else {
      this.setState({
        currentPromo: 0
      })
    }
  }

  handleRightArrowClick() {
    this.handleRightPromoScroll();
  }

  handleLeftArrowClick() {
    this.setState({
      isRightScroll: false
    })
    if (this.state.currentPromo > 0) {
      this.setState({
        currentPromo: this.state.currentPromo - 1
      })
    } else {
      this.setState({
        currentPromo: this.state.promos.length - 1
      })
    }
  }

  componentDidMount() {
    setInterval(this.handleRightPromoScroll, 10000)
  }

  render() {
    return(
        <div className="joshPB">
          <a href='#' onClick={this.handleLeftArrowClick} className="joshLeftArr">
          </a>
          <div className="joshPromo">
          {
            this.state.isRightScroll ?
          <Transition
          items={this.state.currentPromo}
          from={{ opacity: 0, transform: 'translate(100%, 0%)', position: 'absolute', left: '40px', right: '40px'}}
          enter={{ opacity: 1, transform: 'translate(0%, 0%)'}}
          leave={{ opacity: 0, transform: 'translate(-100%, 0%)'}}>
          {item => props => <div style={props}>{this.state.promos[item]}</div>}
          </Transition>
          :
          <Transition
          items={this.state.currentPromo}
          from={{ opacity: 0, transform: 'translate(-100%, 0%)', position: 'absolute', left: '40px', right: '40px'}}
          enter={{ opacity: 1, transform: 'translate(0%, 0%)'}}
          leave={{ opacity: 0, transform: 'translate(100%, 0%)'}}>
          {item => props => <div style={props}>{this.state.promos[item]}</div>}
          </Transition>
          }
          </div>
          <a href='#' onClick={this.handleRightArrowClick} className="joshRightArr">
          </a>
        </div>
    )
  }
}

export default PromoBar;