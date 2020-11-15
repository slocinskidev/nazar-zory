import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import kebabIcon from '../images/kebab-icon-red.svg';
import AboutImage from '../components/AboutImage/AboutImage';
import AboutSocials from '../components/AboutSocials/AboutSocials';
import { device } from '../theme/device';

const About = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 6rem 2rem;
  display: grid;
  grid-template-areas:
    'heading heading'
    'image image'
    'text text'
    'socials socials';

  @media ${device.laptop} {
    grid-template-areas:
      'heading heading'
      'image text'
      'image socials';
    grid-template-rows: auto auto auto;
    margin: 0 auto;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
  }
`;

const UpMenu = styled.section``;

const AboutText = styled.p`
  margin: 2rem 0 0 0;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.grey2};
  line-height: 25px;
  text-align: center;
  grid-area: text;
`;

const IndexPage = () => {
  window.upmenuSettings = {
    id: '684c1bda-ce09-11e8-90ba-525400080321',
  };
  return (
    <Layout>
      <Header />
      <main>
        <About id="o-nas">
          <SectionHeading icon={kebabIcon} heading="O Nas" subHeading="Kilka słów" />
          <AboutImage />
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </AboutText>
          <AboutSocials text="Sprawdź nas na" />
        </About>
        <UpMenu id="menu">
          <SectionHeading icon={kebabIcon} heading="Menu" subHeading="Zamów online" />

          <Helmet>
            <script src="https://cdn.upmenu.com/media/upmenu-widget.js" />
          </Helmet>
          <div id="upmenu-widget" />
        </UpMenu>
        <div id="kontakt" style={{ background: 'blue', height: '100vh' }}>
          Hi people
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
