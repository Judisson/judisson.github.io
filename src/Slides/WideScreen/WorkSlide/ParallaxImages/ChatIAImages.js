import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoNodeJS from '@/Assets/Images/ChatIA/node-logo.png';
import logoWhats from '@/Assets/Images/ChatIA/whatsapp-logo.png';
import logoMongoDB from '@/Assets/Images/ChatIA/mongodb-logo.png';
import logoChatGPT from '@/Assets/Images/ChatIA/chatgpt-logo.png';


const ImgNodeJS = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top: 90vh;
left:0vw;
/* border: 1px dashed red; */
height: 50vh; 
`;

const ImgWhats = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top:55vh;
right: 2vw;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.6px);
`;

const ImgChatGPT = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
top:75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 60vh;
filter: blur(0.8px);
`;

const ImgMongoDB = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
top: 60vh;
left: 20vw;
position: absolute;
/* border: 1px dashed red; */
height: 70vh;
filter: blur(1.2px);
`;

class ChatIAImages extends Component {
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
        <ImgChatGPT src={logoChatGPT} scroll={scrollPercent} alt="logo ChatGPT" />
        <ImgMongoDB src={logoMongoDB} scroll={scrollPercent} alt="logo MongoDB" />
        <ImgNodeJS src={logoNodeJS} scroll={scrollPercent} alt="logo NodeJS" />
        <ImgWhats src={logoWhats} scroll={scrollPercent} alt="logo Whats" />
      </React.Fragment>
    );
  }
}

ChatIAImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ChatIAImages;
