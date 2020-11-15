import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import kebabIcon from '../images/kebab-icon-red.svg';
import AboutImage from '../components/AboutImage/AboutImage';
import AboutSocials from '../components/AboutSocials/AboutSocials';

const About = styled.section`
  padding: 6rem 2rem;
`;

const AboutText = styled.p`
  margin: 2rem 0 0 0;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.grey2};
  line-height: 25px;
  text-align: center;
`;

const IndexPage = () => {
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
        <div id="menu" style={{ background: 'yellow', height: '100vh' }}>
          Hi people
        </div>
        <div id="kontakt" style={{ background: 'blue', height: '100vh' }}>
          Hi people
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
