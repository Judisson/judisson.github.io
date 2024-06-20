import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoJava from '@/Assets/Images/Siclus/java-logo.png';
import logoMySQL from '@/Assets/Images/Siclus/mysql-logo.png';
import logoJSF from '@/Assets/Images/Siclus/jsf-logo.png';

const ImgJava = styled.img.attrs({
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

const ImgMySQL = styled.img.attrs({
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

const ImgJSF = styled.img.attrs({
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

class SiclusImages extends Component {
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
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('WMF');
    }
    return (
      <React.Fragment>
        <ImgJava src={logoJava} scroll={scrollPercent} alt="logo Java" />
        <ImgMySQL src={logoMySQL} scroll={scrollPercent} alt="logo MySQL" />
        <ImgJSF src={logoJSF} scroll={scrollPercent} alt="logo JSF" />
      </React.Fragment>
    );
  }
}

SiclusImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default SiclusImages;
