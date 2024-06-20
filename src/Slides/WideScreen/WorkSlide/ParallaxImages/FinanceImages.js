import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoMongoDB from '@/Assets/Images/Finance/mongodb-logo.png';
import logoNodeJS from '@/Assets/Images/Finance/node-logo.png';
import logoNextjs from '@/Assets/Images/Finance/nextjs-logo.png';

const ImgNodeJS = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 40vh; 
`;

const ImgMongoDB = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-55vh;
right: 2vw;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(0.6px);
`;

const ImgNextjs = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
left: 10vw;
position: absolute;
/* border: 1px dashed red; */
height: 60vh;
filter: blur(1.2px);
`;

class FinanceImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <ImgNextjs src={logoNextjs} scroll={scrollPercent} alt="logo Nextjs" />
        <ImgMongoDB src={logoMongoDB} scroll={scrollPercent} alt="logo MongoDB" />
        <ImgNodeJS src={logoNodeJS} scroll={scrollPercent} alt="logo NodeJS" />
      </React.Fragment>
    );
  }
}

FinanceImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FinanceImages;
