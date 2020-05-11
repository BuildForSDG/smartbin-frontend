import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import useWindowWidth from '../styles/hooks_resize';

import { HeaderBody, Text, Hover, Flex, Button } from '../styles/';

const Header = (props) => {
  // const Width = useWindowWidth();
  const Width = 750;

  const Icons = (props) => {
    return (
      <div style={{ paddingRight: '60px' }}>
        <Text bold>{props.text}</Text>
      </div>
    );
  };

  // const hooks = useWindowWidth()
  return (
    <HeaderBody>
      {Width >= 1000 ? (
        <Flex justifyContent="space-between">
          <Flex>
            <img
              alt="logo"
              src={
                'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
              }
            />
            <h2>CleanUp Africa</h2>
          </Flex>

          <Flex>
            <Icons text={'Events'} to="/events/event" />
            <Icons text={'Resources'} to="/docs/service" />
            <Icons text={'Road Map'} to="docs/proposal" />
          </Flex>

          <Button small color={'#C64F0C'}>
            Get Involved{' '}
          </Button>
        </Flex>
      ) : (
        // {/* MOBILE RESPONSIVENESS   */}
        <Flex justifyContent="space-between">
          <Flex>
            <img
              alt="logo"
              src={
                'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
              }
            />
            <h2>CleanUp Africa</h2>
          </Flex>

          <Flex>
            <div
              style={{ borderRight: '2px solid #1ec46a', marginRight: '1rem' }}
            />
            <Hover style={{ paddingTop: '5px' }}>
              <FiMenu style={{ color: '#1ec46a', fontSize: '2em' }} />
            </Hover>
          </Flex>
        </Flex>
      )}
    </HeaderBody>
  );
};

export default Header;
