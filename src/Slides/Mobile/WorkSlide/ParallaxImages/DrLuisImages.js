import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoReact from '@/Assets/Images/DrLuis/react-logo.png';
import logoSass from '@/Assets/Images/DrLuis/sass-logo.png';
import logoMongoDB from '@/Assets/Images/DrLuis/mongodb-logo.png';
import logoNode from '@/Assets/Images/DrLuis/node-logo.png';


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

const ImgMongoDB = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(0.8px);
`;

const ImgNode = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
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
