import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-bi/telephone';
import emailIcon from '@iconify/icons-carbon/email';
import SectionHeading from '../SectionHeading/SectionHeading';
import Address from '../Address/Address';
import OpeningHours from '../OpeningHours/OpeningHours';
import Button from '../Button/Button';
import Map from '../Map/Map';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  width: 100%;
  padding: 12rem 0rem;
  background-color: ${({ theme }) => theme.color.primary};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'heading heading'
    'address address'
    'map map'
    'openinghours openinghours'
    'button button'
    'pfr pfr';
  justify-content: center;
  justify-items: center;

  @media ${device.laptop} {
    grid-template-areas:
      'heading map'
      'address map'
      'openinghours map'
      'button map'
      'pfr pfr';
    justify-content: space-between;
    justify-items: start;
  }
`;

const ButtonsWrapper = styled.div`
  grid-area: button;
`;

const Picture = styled(Image)`
  width: 340px;
  grid-area: pfr;
  justify-self: center;
`;

function Contact() {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "pfr" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="kontakt">
      <Content>
        <SectionHeading contact heading="Kontakt" subHeading="Nie zwlekaj! Zadzwoń!" />
        <Address />
        <Map />
        <Picture fluid={data.file.childImageSharp.fluid} alt="Ceryfikat Polski Fundusz Rozwoju" />
        <OpeningHours />
        <ButtonsWrapper>
          <Button secondary href="tel:324344937">
            <Icon icon={telephoneIcon} style={{ fontSize: '25px' }} />
            32 434 49 37
          </Button>
          <Button secondary href="mailto:biuro@kebabzory.pl">
            <Icon icon={emailIcon} style={{ fontSize: '25px' }} />
            biuro@kebabzory.pl
          </Button>
        </ButtonsWrapper>
      </Content>
    </Wrapper>
  );
}

export default Contact;
