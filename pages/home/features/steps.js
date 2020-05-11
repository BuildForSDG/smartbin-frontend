import React from 'react';
import styled from 'styled-components';
import { Body, Flex, Text, Card, Title } from '../../../styles/';

const Grid = styled.div``;

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
      <Title center> Get Started </Title>

      <Grid>
        <Card>
          <Ring> 1 </Ring>
          <Text> flhseirgsfb </Text>
        </Card>
      </Grid>
    </Body>
  );
};

export default Steps;
