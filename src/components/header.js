import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import useWindowWidth from '../styles/hooks_resize';

import { HeaderBody, Text, Hover, Flex, Button } from '../styles/';

const Header = (props) => {
  const Width = useWindowWidth();

  const Icons = (props) => {
    return (
      <div style={{ paddingRight: '60px' }}>
        <Flex>
          <Text white small bold>
            {props.text}
          </Text>
          <FiChevronRight style={{ color: '#fff', fontSize: '2rem' }} />
        </Flex>
      </div>
    );
  };

  // const hooks = useWindowWidth()
  return (
    <HeaderBody>
      {Width >= 1000 ? (
        <div>
          <Flex justifyBetween>
            <Flex>
              <img
                alt="logo"
                src={
                  'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
                }
              />
              <h2>Oasis</h2>
            </Flex>

            <Flex>
              <Icons text={'Events'} to="/events/event" />
              <Icons text={'Resources'} to="/docs/service" />
              <Icons text={'Road Map'} to="docs/proposal" />
            </Flex>

            <Flex>
              <a href={'https://event-console.netlify.com'} target={'_blank'}>
                <Button small login>
                  Login
                </Button>
              </a>

              <a href={'https://event-console.netlify.com'} target={'_blank'}>
                <Button small> Create Account </Button>
              </a>
            </Flex>
          </Flex>
        </div>
      ) : (
        // {/* MOBILE RESPONSIVENESS   */}
        <Flex justifyBetween>
          <Flex>
            <img
              alt="logo"
              src={
                'https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png'
              }
            />
            <h2>Oasis</h2>
          </Flex>

          <Flex>
            <div
              style={{ borderRight: '2px solid #fff', marginRight: '1rem' }}
            />
            <Hover style={{ paddingTop: '5px' }}>
              <FiMenu style={{ color: '#fff', fontSize: '2em' }} />
            </Hover>
          </Flex>
        </Flex>
      )}
    </HeaderBody>
  );
};

export default Header;
