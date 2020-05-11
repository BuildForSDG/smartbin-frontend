import React from 'react';
import styled from 'styled-components';

import { Footer, Banner } from '../../components/';
import { Text, Body, Title, Flex, Grid } from '../../styles/';
import { Mobile, WasteStatistics, Steps } from './features/';
import Wrapper from '../wrapper';

const Home = () => {
  return (
    <Wrapper>
      <Banner />

      <Body style={{ background: '#fafafa' }}>
        <br />
        <br />

        <WasteStatistics />

        <br />
        <Grid>
          <Flex column>
            <Title>Optimising Human Effort</Title>

            <Text center style={{ width: '80%' }}>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </Text>
          </Flex>

          <img
            src="/human.svg"
            alt="Humans"
            style={{ maxWidth: '90%', height: 'auto' }}
          />
        </Grid>

        <Mobile />
      </Body>

      <Body>
        <Steps />
      </Body>

      <Footer />
    </Wrapper>
  );
};

export default Home;
