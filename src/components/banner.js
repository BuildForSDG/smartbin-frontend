import React from 'react';
import Header from './header';
import Illustration from '../assets/svg/illustration.svg';
import { Text, Flex, BigTitle, LgButton, BannerBody } from '../styles/';
import useWindowWidth from '../styles/hooks_resize';
import GrassIllustration, {
  ReactComponent as Grass,
} from '../assets/svg/grass.svg';

const Banner = () => {
  const Width = useWindowWidth();

  return (
    <div>
      <Header style={true} />
      <BannerBody>
        <br />

        {Width >= 1050 ? (
          <div>
            <Flex justifyContent={'space-between'}>
              <img src={Illustration} alt="illustration here" />

              <Flex column>
                <br />
                <br />
                <br />
                <br />
                <BigTitle
                  style={{ textAlign: 'center', margin: '1rem  0.2em' }}
                >
                  Clean , Decongest and Reduce waste in Africa
                </BigTitle>
                <Text style={{ textAlign: 'center' }} items>
                  Moving Waste Products Acrosss Afria
                </Text>
                <div style={{ textAlign: 'center' }}>
                  <LgButton> Learn How </LgButton>
                </div>
              </Flex>
            </Flex>
          </div>
        ) : (
          <Flex justifyCenter>
            <div style={{ padding: '1em' }}>
              <BigTitle style={{ textAlign: 'center', margin: '1rem  0.2em' }}>
                Clean , Decongest and Reduce waste in Africa
              </BigTitle>

              <Text style={{ textAlign: 'center' }} items>
                Moving Waste Products Acrosss Afria
              </Text>
              <div style={{ textAlign: 'center' }}>
                <LgButton> Learn How </LgButton>
              </div>
            </div>
          </Flex>
        )}
      </BannerBody>
      <img alt="Grasses" src={GrassIllustration} style={{ height: 'auto' }} />
    </div>
  );
};

export default Banner;
