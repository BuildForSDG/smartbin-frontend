import React from 'react';
import { DiAppstore } from 'react-icons/di';
import { FaGooglePlay } from 'react-icons/fa';

import Header from './header';
import Illustration from '../assets/svg/illustration.svg';
import { Text, Flex, BigTitle } from '../styles/';
import useWindowWidth from '../styles/hooks_resize';

const Banner = () => {
  const Width = useWindowWidth();

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#73E960' }}>
      <Header style={true} />
      <br />
      <br />
      <br />
      {Width >= 1050 ? (
        <div>
          <Flex justifyAround>
            <img src={Illustration} alt="illustration here" />

            <div style={{ paddingRight: '20px' }}>
              <Flex column>
                <br />
                <br />
                <br />
                <br />
                <BigTitle
                  style={{ textAlign: 'center', margin: '1rem  0.2em' }}
                >
                  Clean , Decongest and Reduces waste in Africa
                </BigTitle>

                <Text style={{ textAlign: 'center' }} items>
                  Redefining the regular event experience!
                </Text>
                <Flex justifyCenter />
              </Flex>
            </div>
          </Flex>
          <Text center small>
            Try a demo of the
            <a
              target="_blank"
              style={{
                padding: '0rem 0.5rem',
                textDecoration: 'underline',
                color: '#401364',
                fontWeight: 'bold',
              }}
              href="https://event-console.netlify.app/"
            >
              Oasis Event Management
            </a>
            Console
          </Text>
          <p style={{ textAlign: 'center', color: 'grey' }}>
            *No Account Required
          </p>
          <br />
        </div>
      ) : (
        <Flex justifyCenter>
          <div style={{ padding: '1em' }}>
            <h2 style={{ textAlign: 'center', margin: '0.5em' }}>
              Create, Manage and Organize <br /> your events.
            </h2>

            <Text style={{ textAlign: 'center', width: '50em' }} small>
              Create your conferences and let's do the management!
            </Text>
            <Flex justifyCenter>
              <Flex column>
                <br />

                <br />
                <Text center small>
                  Try a demo of the
                  <ae
                    target="_blank"
                    XX
                    style={{
                      padding: '0rem 0.5rem',
                      textDecoration: 'underline',
                      color: '#401364',
                      fontWeight: 'bold',
                    }}
                    href="https://event-console.netlify.app/"
                  >
                    Oasis Event Management
                  </ae>
                  Console
                </Text>
                <p style={{ textAlign: 'center', color: 'grey' }}>
                  *No Account Required
                </p>
              </Flex>
            </Flex>
          </div>
        </Flex>
      )}
    </div>
  );
};

export default Banner;
