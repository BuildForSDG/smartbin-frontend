import * as React from 'react';
import Header from './header';
import { Text, Flex, BigTitle, LgButton, BannerBody } from '../styles/';
import useWindowWidth from '../styles/hooks_resize';

const Banner = () => {
  // const Width = useWindowWidth();
  const Width = useWindowWidth();

  const words = ['Transport', 'Reduce', 'Distribute'];
  // const [Index, setIndex] = React.useState(0);
  const [AnimatedText, setText] = React.useState('');
  const [Deleting, setDeleting] = React.useState(false);

  // setTimeout(() => {
  //   setIndex(Index + 1);
  // }, 1000);

  const writer = () => {
    const index = 0;
    const currentWord = index % words.length;
    const word = words[currentWord];

    // alert(word);
    if (Deleting) {
      setText(word.substring(0, AnimatedText - 1));
    } else {
      // setText(word.substring(0, AnimatedText + 1));
      console.log(word.substring(0, AnimatedText + 1));
    }
  };

  setTimeout(() => {
    writer();
  }, 1000);

  console.log(AnimatedText);
  return (
    <div>
      <Header style={true} />
      <BannerBody>
        {Width >= 1050 ? (
          <div>
            <Flex justifyContent={'space-between'}>
              <Flex justifyContent={'center'}>
                <img src={'/illustration.svg'} alt="illustration here" />
              </Flex>

              <Flex column>
                <br />
                <br />
                <Flex>
                  <BigTitle
                    style={{ textAlign: 'center', margin: '1rem  0.1em' }}
                  />

                  <BigTitle
                    style={{ textAlign: 'center', margin: '1rem  0.1em' }}
                  >
                    {AnimatedText} Waste Products in Africa.
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
          <Flex justifyContent={'center'} style={{ padding: '0.2em' }} column>
            <Flex justifyContent={'center'}>
              <img
                src={'/illustration.svg'}
                alt="illustration here"
                style={{ height: 'auto', maxWidth: '70%' }}
              />
            </Flex>

            <BigTitle style={{ textAlign: 'center', margin: '1rem  0.2em' }}>
              Clean , Decongest and Reduce waste in Africa
            </BigTitle>

            <Text style={{ textAlign: 'center' }} items>
              Moving Waste Products Acrosss Afria
            </Text>
            <div style={{ textAlign: 'center' }}>
              <LgButton> Learn How </LgButton>
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
