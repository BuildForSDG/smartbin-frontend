import React from 'react';

import { Footer, Banner } from '../../components/';
import { Text, Body } from '../../styles/';
import { Mobile, WasteStatistics, Steps } from './features/';
import Wrapper from '../wrapper';
const Home = () => {
  return (
    <Wrapper>
      <Banner />

      <WasteStatistics />

      <Mobile />
      <Steps />

      <Footer />
    </Wrapper>
  );
};

export default Home;
