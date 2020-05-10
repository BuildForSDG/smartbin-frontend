import React from 'react';

import { Footer, Banner } from '../../components/';
import { Text, Body } from '../../styles/';

const Home = () => {
  return (
    <div>
      <Banner />

      <Body>
        <Text> Home Component </Text>
      </Body>

      <Footer />
    </div>
  );
};

export default Home;
