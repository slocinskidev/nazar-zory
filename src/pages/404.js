import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/Seo/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Nie znaleziono strony" />
    <h1>404: Nie znaleziono strony</h1>
  </Layout>
);

export default NotFoundPage;
