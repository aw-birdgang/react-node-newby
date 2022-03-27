import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const AwNode = ({ Component }) => (
  <>
    <Head>
      <title>AwNode</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Component />
  </>
);

AwNode.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(AwNode);
