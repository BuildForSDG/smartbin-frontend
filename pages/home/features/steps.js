import React from 'react';
import styled from 'styled-components';
import { Body, Flex, Text, Card, Title } from '../../../styles/';

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 50% 50%;
`;

const Ring = styled.div`
  width: 5rem;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 100%;
  border: 3px solid #090447;
  color: #090447;
  border-style: dashed;
`;

const Steps = () => {
  return (
    <Body>
      <Title center> Move your waste today </Title>

      <Grid>
        <Flex column>
          <Text> Get started in few dials </Text>
          <ul>
            <li> Dail 111 </li> <li> Dail 111 </li> <li> Dail 111 </li>{' '}
            <li> Dail 111 </li> <li> Dail 111 </li>{' '}
          </ul>{' '}
        </Flex>
        <img
          src="/phone.svg"
          alt="Humans"
          style={{ maxWidth: '90%', height: 'auto' }}
        />
      </Grid>
    </Body>
  );
};

export default Steps;
