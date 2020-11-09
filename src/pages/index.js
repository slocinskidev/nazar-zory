import React from 'react';
import Layout from '../layouts/Layout';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const IndexPage = () => (
  <Layout>
    <div id="o-nas" style={{ background: 'red', height: '100vh' }}>
      Hi people
    </div>
    <div id="menu" style={{ background: 'yellow', height: '100vh' }}>
      Hi people
    </div>
    <div id="kontakt" style={{ background: 'blue', height: '100vh' }}>
      Hi people
    </div>
  </Layout>
);

export default IndexPage;
