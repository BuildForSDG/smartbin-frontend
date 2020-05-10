import * as React from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(null);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
