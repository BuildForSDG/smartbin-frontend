import * as React from 'react';
import Header from './header';
import { Text, Flex, BigTitle, LgButton, BannerBody } from '../styles/';
import useWindowWidth from '../styles/hooks_resize';

const Banner = () => {
  // const Width = useWindowWidth();
  const Width = 850;

  // const words = ['Transport', 'Reduce', 'Distribute'];
  // const [Index, setIndex] = React.useState(0);
  // const [Text, setText] = React.useState('');

  // setTimeout(() => {
  //   setIndex(Index + 1);
  // }, 1000);

  // React.useEffect(() => {
  //   const name = 'me';

  //   //   const index = 0;
  //   //   const interval = 3000;
  //   //   const deleting = false;
  //   //   const currentWord = index % words.length;
  //   //   let word = words[currentWord];
  //   //   let text = '';

  //   // setText(word.substring(0, text + 1));

  //   setText('rand');

  //   return name;
  // }, []);

  return (
    <div>
      <Header style={true} />
      <BannerBody>
        <br />

        {Width >= 1050 ? (
          <div>
            <Flex justifyContent={'space-between'}>
              <img src={'/illustration.svg'} alt="illustration here" />

              <Flex column>
                <br />
                <br />
                <br />
                <br />
                <Flex>
                  <BigTitle
                    style={{ textAlign: 'center', margin: '1rem  0.1em' }}
                  >
                    {words[Index]}
                  </BigTitle>

                  <BigTitle
                    style={{ textAlign: 'center', margin: '1rem  0.1em' }}
                  >
                    Waste Products in Africa.
                  </BigTitle>
                </Flex>

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
      <img
        alt="Grasses"
        src={'/grass.svg'}
        style={{ height: 'auto', width: '100%' }}
      />
    </div>
  );
};

export default Banner;
