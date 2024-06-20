import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoSass from '@/Assets/Images/BilheteMaster/sass-logo.png';
import logoReact from '@/Assets/Images/BilheteMaster/react-logo.png';

const ImgReact = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 40vh; 
`;

const ImgSass = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(0.6px);
`;

class BilheteMasterImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <ImgSass src={logoSass} scroll={scrollPercent} alt="logo Sass" />
        <ImgReact src={logoReact} scroll={scrollPercent} alt="logo React" />
      </React.Fragment>
    );
  }
}

BilheteMasterImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default BilheteMasterImages;
