import React from 'react';

import { Footer, Banner } from '../../components/';
import { Text, Body } from '../../styles/';
import { Mobile, WasteStatistics, Steps } from './features/';

const Home = () => {
  return (
    <div>
      <Banner />

      <WasteStatistics />

      <Mobile />
      <Steps />

      <Footer />
    </div>
  );
};

export default Home;
