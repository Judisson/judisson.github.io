import React, { Component } from 'react';
import styled from 'styled-components';
import whatsappImg from "@/Assets/Images/Social/whatsapp.svg";
import githubImg from '@/Assets/Images/Social/git.svg';
import mailImg from '@/Assets/Images/Social/mail.svg';
import linkedInImg from '@/Assets/Images/Social/linkedin.svg';
import Icon from './Icon';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;

const ContactTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #fff;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const IconGroup = styled.div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${device.laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactTitle>CONTATO</ContactTitle>
        <IconGroup>
          <Icon imgURL={githubImg} alternate="github" redirectURL="https://github.com/judisP" />
          <Icon imgURL={mailImg} alternate="mail" redirectURL="mailto:judissonDev@hotmail.com" />
          <Icon imgURL={linkedInImg} alternate="linkedin" redirectURL="https://www.linkedin.com/in/judisson/" />
          <Icon imgURL={cvImg} alternate="Currículo" redirectURL="" />
        </IconGroup>
      </Container>
    );
  }
}

export default Contact;
