import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Header from '../components/Header/Header';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import kebabIcon from '../images/kebab-icon-red.svg';
import AboutImage from '../components/AboutImage/AboutImage';
import Socials from '../components/Socials/Socials';
import { device } from '../theme/device';
import Contact from '../components/Contact/Contact';
import FrequentlyOrdered from '../components/FrequentlyOrdered/FrequentlyOrdered';
import OurApp from '../components/OurApp/OurApp';
import SEO from '../components/Seo/Seo';

const About = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 12rem 2rem;
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

const UpMenu = styled.section`
  padding: 12rem 2rem;
`;

const AboutText = styled.p`
  margin: 2rem 0 0 0;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.color.grey2};
  line-height: 25px;
  text-align: center;
  grid-area: text;

  @media ${device.laptop} {
    margin: 0;
    font-size: ${({ theme }) => theme.size.s};
    text-align: left;
  }
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Strona główna" pathname={location.pathname} />
      <Header />
      <main>
        <About id="o-nas">
          <SectionHeading icon={kebabIcon} heading="O Nas" subHeading="Kilka słów" />
          <AboutImage />
          <AboutText>
            Nazar Kebab Żory rozpoczął działalność w 2004 roku i od początku istnienia prowadzony
            jest przez Turka z krwi i kości Leventa Baykala. Od tego czasu lokal przeszedł kompletną
            metamorfozę i za sprawą właściciela stał się jedną z najbardziej rozpoznawalnych
            restauracji typu Fast-Food w mieście. Dodatkowo, nieustająca chęć rozwoju i polepszania
            doznań klienta doprowadziła do przeniesienia Nazar Kebab w świat wirtualny, a
            konkretniej była motorem napędowym do stworzenia aplikacji, dzięki której klienci w
            łatwy i szybki sposób mogą zamówić swoje ulubione danie z dostawą wprost pod drzwi.
            <br />
            <br />
            Zestawy oraz smaki osobiście komponuje właściciel, ponieważ jak mówi „Zadowolony klient
            jest najważniejszy”. Wszystkie składniki począwszy od warzyw używanych do sałatki
            kończąc na mięsie są nieustanie sprawdzane pod względem jakości i smaku. Receptury sosów
            oraz temperatura obróbki mięsa są niezmienne, tak aby powracający klienci otrzymali ten
            sam smak, który zapamiętali. Powtarzalność, jakość i tradycja, to najważniejsze wartości
            jakimi kieruje się Nazar Kebab Żory.
            <br />
            <br />
            Zapraszamy do naszego lokalu przy ul. Górne Przedmieście 2 w Żorach. Jesteśmy dla Was
            otwarci CAŁY TYDZIEŃ!
          </AboutText>
          <Socials text="Jesteśmy na" />
        </About>
        <Divider />
        <UpMenu id="menu">
          <SectionHeading
            icon={kebabIcon}
            heading="Najczęściej wybierane"
            subHeading="Zamów online"
          />
          <FrequentlyOrdered />
        </UpMenu>
        <Contact />
        <OurApp />
      </main>
    </Layout>
  );
};

export default IndexPage;
