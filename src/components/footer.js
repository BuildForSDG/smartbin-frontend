import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi';

import useWindowWidth from '../styles/hooks_resize';
import { Text, FooterBody, Flex, Hover } from '../styles';

const Footer = () => {
  const Testing = styled.div`
    textAlign: "center",
    background: "#C64F0C",
    padding: "1em",
    color: "#fff",
  `;

  const Width = useWindowWidth();

  const FooterLink = (props) => {
    return (
      <Text white small>
        {props.text}
      </Text>
    );
  };

  return (
    <div>
      <Testing>
        <Flex justifyCenter>
          <Text small white>
            Oasis is coming soon. Get early acess
          </Text>
        </Flex>
      </Testing>

      <FooterBody>
        {Width >= 800 ? (
          <div style={{ padding: '2%' }}>
            <Flex justifyContent="space-between">
              <div>
                <br />
                <h3 style={{ color: '#fff', textAlign: 'center' }}>Oasis </h3>

                <Flex justifyContent="space-even">
                  <Hover padded>
                    <FiFacebook style={{ color: 'black', fontSize: '2rem' }} />
                  </Hover>

                  <Hover padded>
                    <FiTwitter style={{ color: 'blue', fontSize: '2rem' }} />
                  </Hover>

                  <Hover padded>
                    <FiGithub style={{ color: 'black', fontSize: '2rem' }} />
                  </Hover>
                </Flex>
              </div>
              <Flex column>
                <Text> PRODUCT </Text>
                <FooterLink text={' Create Team'} />
                <FooterLink text={'Documentation'} />
                <FooterLink text={'Biling'} />
              </Flex>
              <Flex column>
                <Text> HELP </Text>
                <FooterLink text={'Integrations'} />
                <FooterLink text={'Contact Support'} />
                <FooterLink text={'Guides'} />
                <FooterLink text={'About Us'} />
              </Flex>

              <Flex column>
                <Text> MORE </Text>
                <FooterLink text={'Social'} />
                <FooterLink text={'Careers'} />
                <FooterLink text={'Legal Terms'} />
              </Flex>
            </Flex>
          </div>
        ) : (
          <div style={{ padding: '0.5%' }}>
            <Flex justifyCenter>
              <div>
                <h4
                  style={{
                    textAlign: 'center',
                    marginTop: '1em',
                    color: '#fff',
                  }}
                >
                  Oasis
                </h4>

                <Flex justifyAround>
                  <Hover padded>
                    <FiFacebook style={{ color: 'black', fontSize: '1.8em' }} />
                  </Hover>
                  <Hover padded>
                    <FiTwitter style={{ color: 'blue', fontSize: '1.8em' }} />
                  </Hover>
                  <Hover padded>
                    <FiGithub style={{ color: 'black', fontSize: '1.8em' }} />
                  </Hover>
                </Flex>
              </div>
            </Flex>

            <br />
            <Flex justifyAround>
              <Flex>
                <Text> PRODUCT </Text>
                <Hover marginRight>
                  <FooterLink text={' Create Team'} />
                </Hover>
                <FooterLink text={'Documentation'} />
                <FooterLink text={'Biling'} />
              </Flex>
              <Flex>
                <Text> HELP </Text>
                <FooterLink text={'Integrations'} />
                <FooterLink text={'Contact Support'} />
                <FooterLink text={'Guides'} />
                <FooterLink text={'About Us'} />
              </Flex>

              <Flex>
                <Text> MORE </Text>
                <FooterLink text={'Social'} />
                <FooterLink text={'Careers'} />
                <FooterLink text={'Legal Terms'} />
              </Flex>
            </Flex>
          </div>
        )}

        <Testing
          style={{
            backgroundColor: ' #C64F0C',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          <p>
            Copyright © {new Date().getFullYear()} , a subsidiary of the
            <a href="https://www.fundry.netlify.com"> Fundry Program </a>.
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </p>
        </Testing>
      </FooterBody>
    </div>
  );
};

export default Footer;
