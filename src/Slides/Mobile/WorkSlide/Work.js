import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'CHAT-IA',
        projectCompany: 'Projeto Pessoal',
        projectDesc: 'Chatbot inteligente para interagir com os usuários de forma automatizada.',
        projectType: 'BACK-END',
        roles: ['Node', 'MongoDB'],
      },
      {
        number: '02',
        projectName: 'FINANCE',
        projectCompany: 'Projeto Pessoal',
        projectDesc: "Projeto desenvolvido para gerenciar finanças pessoais de conta bancária e Cartão de crédito.",
        projectType: 'FULL-STACK',
        roles: ['Next', 'Node', 'MongoDB'],
      },
      {
        number: '03',
        projectName: 'CINE BUSCA',
        projectCompany: 'Projeto Pessoal',
        projectDesc: 'Projeto de busca de filmes e séries utilizando da integração com bancos de dados de filmes do IMDB',
        projectType: 'BACK-END',
        roles: ['Java', 'Spring Data JPA', 'PostgreSQL'],
      },
      {
        number: '04',
        projectName: 'BILHETE MASTER',
        projectCompany: 'Empresa: Advanced Digital',
        projectDesc: 'Projeto com interface de usuário para compra de ingressos. Contendo um painel de administração para gerenciar o conteúdo.',
        projectType: 'FRONT-END',
        roles: ['React', 'Sass'],
      },
      {
        number: '05',
        projectName: 'SICLUS',
        projectCompany: 'Empresa: Ensti',
        projectDesc: 'Impactando mais de 550 Associações Atléticas do Banco do Brasil, na eficiência administrativa e beneficiando milhares de pessoas.',
        projectType: 'FULL-STACK',
        roles: ['Java', 'JSF', 'MySQL'],
      },
      {
        number: '06',
        projectName: 'DR. LUIS',
        projectCompany: 'Empresa: Dr. Luis Fernando Bastos',
        projectDesc: 'Site desenvolvido para médico angiologista, facilitando a exibição de seu trabalho e o agendamento de consultas.',
        projectType: 'FULL-STACK',
        roles: ['React', 'Sass', 'Node', 'MongoDB'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectCompany={this.workDetails[slideNumber].projectCompany}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
