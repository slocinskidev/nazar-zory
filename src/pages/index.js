import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import kebabIcon from '../images/kebab-icon-red.svg';

const About = styled.section`
  padding: 6rem 2rem;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <About id="o-nas">
          <SectionHeading icon={kebabIcon} heading="O Nas" subHeading="Kilka słów" />
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
