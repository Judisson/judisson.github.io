import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const LogoImage = styled.img`
/* border: 1px solid black; */
@media ${device.laptop} {
    height: 110px;
    width: 110px;
  }
@media ${device.laptopL} {
    height: 150px;
    width: 150px;
  }
  @media ${device.desktop} {
    height: 200px;
    width: 200px;
  }
`;

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.notifySlack = this.notifySlack.bind(this);
  }

  notifySlack() {
    const { alternate } = this.props;
    console.log(alternate);
    fetch(process.env.SLACK_URL, {
      credentials: 'omit',
      method: 'POST',
      body: JSON.stringify({ text: `🚀 ${alternate}` }),
    });
  }

  render() {
    const { imgURL, alternate, redirectURL } = this.props;
    return (
      <a href={redirectURL} onClick={this.notifySlack} target="_blank" rel="noopener noreferrer">
        <LogoImage src={imgURL} alt={alternate} />
      </a>

    );
  }
}

Icon.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default Icon;
