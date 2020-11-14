import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <div id="o-nas" style={{ background: 'red', height: '100vh' }}>
          Hi people
        </div>
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
