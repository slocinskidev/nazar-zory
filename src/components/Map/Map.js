import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/device';

const Wrapper = styled.section`
  margin: 4rem 0 0;
  width: 100vw;
  height: 400px;
  grid-area: map;
  align-self: center;

  @media ${device.laptop} {
    margin: 0;
    width: 60vw;
    max-width: 800px;
  }
`;

const Map = () => {
  return (
    <Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.2519340433078!2d18.68815551571663!3d50.04411167942129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114cd3c7ad6e51%3A0x5fac8e7a6dd4065e!2sNazar%20Kebab!5e0!3m2!1spl!2spl!4v1606326197508!5m2!1spl!2spl"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        title="map"
      />
    </Wrapper>
  );
};

export default Map;
