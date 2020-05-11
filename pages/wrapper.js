import React from 'react';
import Head from 'next/head';

const Wrapper = ({ children }) => {
  return (
    <div>
      <Head>
        <title> CleanUp Africa </title> <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Head>

      {children}
    </div>
  );
};
export default Wrapper;
