import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoJava from '@/Assets/Images/CineBusca/java-logo.png';
import logoPostgres from '@/Assets/Images/CineBusca/postgres-logo.png';
import logoSpring from '@/Assets/Images/CineBusca/springboot-logo.png';


const ImgPostgres = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-80vh;
left: 10vw;
/* border: 1px dashed red; */
height: 40vh;
`;

const ImgJava = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -30vh;
right:0vw;
/* border: 1px dashed red; */
height: 40vh; 
filter: blur(0.6px);
`;

const ImgSpring = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-50vh;
left: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 40vh;
filter: blur(1.2px);
`;

class CineBuscaImages extends Component {
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
        <ImgJava src={logoJava} scroll={scrollPercent} alt="logo Java" />
        <ImgPostgres src={logoPostgres} scroll={scrollPercent} alt="logo Postgres" />
        <ImgSpring src={logoSpring} scroll={scrollPercent} alt="logo Spring" />
      </React.Fragment>
    );
  }
}

CineBuscaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CineBuscaImages;
