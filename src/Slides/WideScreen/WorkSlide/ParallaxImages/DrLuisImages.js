import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoReact from '@/Assets/Images/DrLuis/react-logo.png';
import logoSass from '@/Assets/Images/DrLuis/sass-logo.png';
import logoMongoDB from '@/Assets/Images/DrLuis/mongodb-logo.png';
import logoNode from '@/Assets/Images/DrLuis/node-logo.png';


const ImgReact = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -100vh;
left:0vw;
/* border: 1px dashed red; */
height: 40vh; 
`;

const ImgSass = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-60vh;
right: 2vw;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(0.6px);
`;

const ImgMongoDB = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 7}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(0.8px);
`;

const ImgNode = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-50vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(1.2px);
`;

class DrLuisImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <ImgReact src={logoReact} scroll={scrollPercent} alt="logo React" />
        <ImgSass src={logoSass} scroll={scrollPercent} alt="logo Sass" />
        <ImgMongoDB src={logoMongoDB} scroll={scrollPercent} alt="logo MongoDB" />
        <ImgNode src={logoNode} scroll={scrollPercent} alt="logo Node" />
      </React.Fragment>
    );
  }
}

DrLuisImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default DrLuisImages;
